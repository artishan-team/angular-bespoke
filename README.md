# AngularJS bespoke.js directive

[![Join the chat at https://gitter.im/artishan/angular-bespoke](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/artishan/angular-bespoke?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## grunt cmd

### Demo

```
grunt demo
```

### Dev

```
grunt dev
```

### Build

```
grunt build
```

## Usages

### Angular

```javascript
angular.module('myModule', ['artishan.bespoke']);
```

```javascript
$scope.data = [
  "<h1>Angular-bespoke</h1>",
  "<h2><a href='http://test.com'>slide2</a></h2>",
  "<h3>slide3</h3>",
  '<h2 class="single-words">Single words</h2>',
  '<ul><li>list1</li><li>list2</li><li>list3</li></ul>',
];
```

### Markup
```html
<bespoke slides="data"></bespoke>
```
