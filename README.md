Чтобы указывать браузеру где находится `js`, мы должны указать в теге `body` следующее:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>

    <script type="text/java">
        <!-- здесь пишем js код -->
    </script>

</body>
</html>
```
Атрибут `type="text/java"` был нужен для старых браузер, теперь в современных браузер необязательно его указывать:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>

    <script>
        <!-- здесь пишем js код -->
    </script>

</body>
</html>
```
