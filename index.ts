/**
 * 
 * @param value : Value is String or String[] Example -> ```getGenderWithCallback(["John", "Johnny"] or "John")```
 * @param cb : Use With Callback.
 */
interface Features {
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
}

export async function getGender(value: string | string[]): Promise<any[]> {
    if (typeof value == "string") value = [value]; // if string, string convert is array
   const result = await Promise.all(
    Array.from(value).map(async (item) => { // map
        const response = await fetch( // fetch 
          `https://api.genderapi.io/api/?name=${item}&key=64f9f16ef78fe2cf920da503`, // pls not touch api key
          {
            method: "GET",
          }
        );
        const data = await response.json(); // convert json
       return data;
      })
   )
   return result
}

export function getGenderWithCallback(value: string | string[], cb: (data: Features) => void) { // new function
  if (typeof value == "string") value = [value]; // if string, string convert is array

  Array.from(value).map(async (item) => { // map
    const response = await fetch( // fetch 
      `https://api.genderapi.io/api/?name=${item}&key=64f9f16ef78fe2cf920da503`, // pls not touch api key
      {
        method: "GET",
      }
    );
    const data = await response.json(); // convert json
    return cb(data); // return data
  });
}