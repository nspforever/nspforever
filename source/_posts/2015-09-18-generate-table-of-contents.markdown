---
layout: post
title: "Generate 'Table of Contents'"
date: 2015-09-18 20:00:32 +0000
comments: true
toc: true
tocstartlv: 3
categories:
- octopress
- jquery plug-in

---

After I got Octopress setup, I found there is no easy way to generate the table of contents of my blog,
actually there is a way by using the generate_toc extension of rdiscount markdown parser, but the extension
always generates table of contents from H1, so I decidied to do it by using the tableofcontents jquery plugin.

###Download Table of Contents jQuery Plugins
Download at http://fuelyourcoding.com/scripts/toc/ and put jquery.tableofcontents.min.js in your source/javascripts
directory.

<!--more-->

###Create tocgenerator.js
Create a tocgenerator.js under source/javascripts with below content:
```javascript
function generateTOC(insertBefore, heading, startLv) {
    var container = jQuery("<div id='tocBlock1'></div>");
    var div = jQuery("<ul id='toc'></ul>");
    var content = jQuery(insertBefore).first();

    if (heading) {
        container.append('<span class="tocHeading">' + heading + '</span>');
    }

    if (startLv === undefined) { startLv = 1; }

    div.tableOfContents(content, { startLevel: startLv });
    container.append(div);
    container.insertBefore(insertBefore);
}
```

###Reference the javascript files in your blog
Add blow lines at the bottom of source/_include/custom/head.html

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="{{ root_url }}/javascripts/jquery.tableofcontents.min.js" type="text/javascript"></script>

// !!! Load jQuery before this
<script type="text/javascript">
    jQuery.noConflict();
</script>
<script src="{{ root_url }}/javascripts/tocgenerator.js" type="text/javascript"></script>
```

###Add below lines
Add below lines to the source/include/custom/footer.html
```html
{% if index %}
  {% comment %}
  No table of contents on the index page.
  {% endcomment %}

{% elsif page.toc == true %}
  {% if page.tocstartlv %}
    <script type="text/javascript">
    jQuery(document).ready(function() {
      // Put a TOC right before the entry content.
      /*global generateTOC*/
      generateTOC('.entry-content', "{{ page.toctitle }}", "{{ page.tocstartlv }}");
    });
    </script>
  {% else %}
    <script type="text/javascript">
    jQuery(document).ready(function() {
      // Put a TOC right before the entry content.
      /*global generateTOC*/
      generateTOC('.entry-content', "{{ page.toctitle }}");
    });
    </script>
  {% endif %}

{% endif %}
```
###Add below highlighted lines to the post
```yaml mark:7,8
---
layout: post
title: "Hello World!!!"
date: 2015-09-18 06:00:21 +0000
comments: true
author: gudu
toc: true
tocstartlv: 3
categories:
- octopress
```

