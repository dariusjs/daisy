
import { isRight } from "fp-ts/lib/Either";
import * as t from "io-ts";

const IoTsInputType = t.type( {
  a: t.Int,
  b: t.Int,
  c: t.Int,
});

export type IoType = t.TypeOf<typeof IoTsInputType>
const input: IoType = JSON.parse(process.argv[2])

const validate = isRight(IoTsInputType.decode(input))

if (validate == true) {
  const total = input.a + input.b + input.c
  console.log("Total:", input.a + input.b + input.c) 
} else {
  console.log("Invalid Data")
}
