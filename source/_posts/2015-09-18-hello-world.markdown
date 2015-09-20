---
layout: post
title: "Hello World!!!"
date: 2015-09-18 06:00:21 +0000
comments: true
categories:
- Bash
- Basic
- C
- C++
- C#
- Clipper
- CoffeeScript
- Delphi
- Java
- Javascript
- Matlab
- Objective C
- Python
- Ruby
- Scala
- Swift
author: gudu
toc: true
tocstartlv: 3

---


###C
```c
#include <stdlib.h>
int main(void)
{
    puts("Hello, world!");
}
```

<!-- more -->
###C++
```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, world!
";
    return 0;
}
```

###CSharp
```csharp mark:4-7
using System;
class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, world!");
    }
}
```

###CoffeeScript
```coffee
console.log 'Hello, world!'
```

###Delphi
```pas
program HelloWorld;
begin
  Writeln('Hello, world!');
end.
```
###Java
```java
import javax.swing.JFrame;  //Importing class JFrame
import javax.swing.JLabel;  //Importing class JLabel
public class HelloWorld {
    public static void main(String[] args) {
        JFrame frame = new JFrame();           //Creating frame
        frame.setTitle("Hi!");                 //Setting title frame
        frame.add(new JLabel("Hello, world!"));//Adding text to frame
        frame.pack();                          //Setting size to smallest
        frame.setLocationRelativeTo(null);     //Centering frame
        frame.setVisible(true);                //Showing frame
    }
}
```


###JavaScript
```javascript
document.write('Hello, world!');
```


###Objective-C
```objc
#import
#import

int main(void)
{
    NSLog(@"Hello, world!");
    return 0;
}
```

###Python
```python
print "Hello, world!"
```

###Ruby
```ruby
puts "Hello, world!"
```
