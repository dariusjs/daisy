
type InputType = {
  a: number;
  b: number;
  c: number;
}
const input: InputType = JSON.parse(process.argv[2]) as InputType;
const total: number = input.a + input.b + input.c;

console.log('Total:', input.a + input.b + input.c);
