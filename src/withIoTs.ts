
import { isRight } from 'fp-ts/lib/Either';
import * as t from 'io-ts';

const IoTsInputType = t.type( {
  a: t.Int,
  b: t.Int,
  c: t.Int,
});

export type IoType = t.TypeOf<typeof IoTsInputType>
const input: IoType = JSON.parse(process.argv[2]) as IoType;

const validate = isRight(IoTsInputType.decode(input));

if (validate == true) {
  const total: number = input.a + input.b + input.c;
  console.log('Total:', total);
} else {
  console.log('Invalid Data');
}
