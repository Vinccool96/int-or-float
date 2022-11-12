# int-or-float
[![](https://img.shields.io/github/license/Vinccool96/int-or-float)](./LICENSE)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Vinccool96/int-or-float?logo=github&sort=semver)](https://github.com/Vinccool96/int-or-float/releases)
[![action-bumpr supported](https://img.shields.io/badge/bumpr-supported-ff69b4?logo=github&link=https://github.com/haya14busa/action-bumpr)](https://github.com/haya14busa/action-bumpr)

A small package for the lazy people like me that don't want to always verify if a number is a float or an integer.

Only numbers can be used. Works with typescript.

## Why does this package even exist?

It's useful if you want to verify the nature of a number in multiple files but don't want to export that function. 

## How to use it

```ts
import { isFloat, isInt } from "int-or-float"

const foo = 1
const bar = 2.2

console.log(isInt(foo)) // expected output: true
console.log(isInt(bar)) // expected output: false

console.log(isFloat(foo)) // expected output: false
console.log(isFloat(bar)) // expected output: true
```
