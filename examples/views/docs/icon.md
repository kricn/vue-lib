## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `k-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="k-icon-menu-unfold"></i>
<i class="k-icon-link"></i>
<i class="k-icon-heart"></i>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'k-icon-' + name"></i>
      <span class="icon-name">{{'k-icon-' + name}}</span>
    </span>
  </li>
</ul>