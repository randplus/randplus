# randplus
A package that add functions for random.

###### Teams
<a href="https://oto.pet/"><img src="https://raw.githubusercontent.com/randplus/docs/main/img/randplus.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/></a>
<a href="https://oto.pet/"><img src="https://www.otoneko.cat/img/logo.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/></a>
<a href="https://www.otoho.me/"><img src="https://www.otoho.me/img/logo.png" alt="Oto Home" style="display: block; width: auto; height: 100px;"/></a>

## Usage
```js
const random = require('randplus');

console.log(random.random()); // 0 ~ 1 (!= 1)
console.log(random.random(true)); // 0 ~ 1 (== 1)
console.log(random.number(1, 10)); // 1 ~ 10
console.log(random.number(1, 10, false)); // 1 ~ 10 (!= 10)
console.log(random.integer(1, 10)); // 1 ~ 10
console.log(random.integer(1, 10, false)); // 1 ~ 10 (!= 10)
console.log(random.boolean()); // true or false
console.log(random.array(['Hello', 'World!'])); // 'Hello' or 'World!'
console.log(random.buffer()); // <Buffer >
console.log(random.buffer(16)); // '<Buffer 26 bc 62 84 b0 94 5e c5 1a d5 fd 69 6f d3 78 b1>'
console.log(random.string(3)); // '000' ~ 'ZZZ'
console.log(random.string('abc', 3)); // 'aaa' ~ 'ccc'
console.log(random.string(['01', '02', '03'], 3)); // '010101' ~ '030303'
console.log(random.shuffle('abcdef')); // 'cfeadb'
console.log(random.shuffle(['a', 'b', 'c', 'd', 'e', 'f'])); // ['c', 'f', 'e', 'a', 'd', 'b']
console.log(random.color()); // '000000' ~ 'ffffff'
console.log(random.color('hex')); // '000000' ~ 'ffffff'
console.log(random.color('hex', { prefix: '#' })); // '#000000' ~ '#ffffff'
console.log(random.color('rgb')); // [0, 0, 0] ~ [255, 255, 255]
console.log(random.color('word')); // 'limegreen'
console.log(random.color('word', { language: 'ja' })); // '鉄色'
console.log(random.color.hex()); // '000000' ~ 'ffffff'
console.log(random.color.hex('#')); // '000000' ~ 'ffffff'
console.log(random.color.rgb()); // [0, 0, 0] ~ [255, 255, 255]
console.log(random.color.word()); // 'limegreen'
console.log(random.color.word('cn')); // '紫磨金' 
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>
