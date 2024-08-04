# Kurulum (Installation)
Kurulum için aşağıdaki kodu komut istemcine yapıştır. (To install, paste the code below into your command prompt.)
```shell
npm i yuit-gender.js
```
## Örnekler (Example's)
```js
import { getGenderWithCallback } from "yuit-gender.js"

getGenderWithCallback(["Ahmet","Mehmet"], (data) => {
    console.log(data.gender)
})
```

## Örnek 2 (Example 2)
```js
import { getGender } from "yuit-gender.js"

const genderTest = async (value) => {
const data = await getGender(value);
console.log(data)
}

genderTest(["Ahmet"]) // or "Ahmet"
```
## Özellikler ( Features )
```js
status: boolean;
used_credits: number;
remaining_credits: number;
expires: number;
q: string;
name: string;
gender: string;
country: string;
total_names: number;
probability: number;
duration: string;
```