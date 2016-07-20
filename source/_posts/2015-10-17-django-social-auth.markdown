---
layout: post
title: "为Django网站添加社交网络账号登录功能"
date: 2015-10-17 02:51:09 +0000
comments: true
categories:
---
## 创建virtualenv
```
$ mkvirtualenv social_auth
$ pip install django
```

## 创建新的Django项目
```
$ django-admin.py startproject social_auth
$ cd social_auth
$ python manage.py startapp social_auth_app
```

## 生成数据库表
```
$ python manage.py migrate
(social_auth) E:\dev\python\social_auth>python manage.py migrate
Operations to perform:
  Synchronize unmigrated apps: staticfiles, messages
  Apply all migrations: contenttypes, admin, auth, sessions
Synchronizing apps without migrations:
  Creating tables...
    Running deferred SQL...
  Installing custom SQL...
Running migrations:
  Rendering model states... DONE
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying sessions.0001_initial... OK
```

## 创建templates目录
```
$ mkdir templates
```

## 在Setting.py配置templates目录
修改如下代码的第4行，将os.path.join(BASE_DIR, 'templates')设置为templates目录
```
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```
## 测试
运行如下命令
```
$python manage.py runserver
```
并用浏览器访问http://127.0.0.1:8000/, 如果你能看到类似于下图的页面说明一切正常

## 安装python-social-auth
```
$pip install python-social-auth
```
## 配置python-social-auth
```
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_social_app',
    'social.apps.django_app.default',
)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.core.context_processors.debug',
                'django.core.context_processors.i18n',
                'django.core.context_processors.media',
                'django.core.context_processors.static',
                'django.core.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
                'social.apps.django_app.context_processors.backends',
                'social.apps.django_app.context_processors.login_redirect',
            ],
        },
    },
]
NOTE: Since we’re using LinkedIn Social Authentication, we need the Linkedin OAuth2 backend:
AUTHENTICATION_BACKENDS = (
    'social.backends.linkedin.LinkedinOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)
```

## 生成数据表
```
$manage.py makemigrations
$manage.py migrate

Operations to perform:
  Synchronize unmigrated apps: staticfiles, messages
  Apply all migrations: default, admin, sessions, auth, contenttypes
Synchronizing apps without migrations:
  Creating tables...
    Running deferred SQL...
  Installing custom SQL...
Running migrations:
  Rendering model states... DONE
  Applying default.0001_initial... OK
  Applying default.0002_add_related_name... OK
  Applying default.0003_alter_email_max_length... OK
```

## 注册LinkedIn应用
1. 访问https://www.linkedin.com/developer/apps, 并创建一个LinkedIn Application
2. 在Authorized Redirect URLs:文本框中填写
```
http://127.0.0.1:8000/complete/linkedin-oauth2/
```
并点击"Add"按钮，然后点击Update按钮
3. 修改Settings.py,添加如下代码:
```
SOCIAL_AUTH_LINKEDIN_OAUTH2_KEY = 'update me' #LinkedIn App的Client ID
SOCIAL_AUTH_LINKEDIN_OAUTH2_SECRET = 'update me' #LinkedIn App的Client secret
SOCIAL_AUTH_LOGIN_REDIRECT_URL = '/home/'
SOCIAL_AUTH_LOGIN_URL = '/'
```

## 更新urls.py
```
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^$', 'social_auth_app.views.login'),
    url(r'^home/$', 'social_auth_app.views.home'),
    url(r'^logout/$', 'social_auth_app.views.logout'),
]
```
## 更新Views
```
from django.shortcuts import render_to_response, redirect
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.template.context import RequestContext


def login(request):
    return render_to_response('login.html', context=RequestContext(request))


@login_required(login_url='/')
def home(request):
    return render_to_response('home.html')


def logout(request):
    auth_logout(request)
    return redirect('/')

```
## 更新Templates
