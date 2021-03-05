"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("fp-ts/lib/Either");
const t = __importStar(require("io-ts"));
const IoTsInputType = t.type({
    a: t.Int,
    b: t.Int,
    c: t.Int,
});
const input = JSON.parse(process.argv[2]);
const validate = Either_1.isRight(IoTsInputType.decode(input));
if (validate == true) {
    const total = input.a + input.b + input.c;
    console.log('Total:', total);
}
else {
    console.log('Invalid Data');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aElvVHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aXRoSW9Ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBMkM7QUFDM0MseUNBQTJCO0FBRTNCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUU7SUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0NBQ1QsQ0FBQyxDQUFDO0FBR0gsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEQsTUFBTSxRQUFRLEdBQUcsZ0JBQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFdEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO0lBQ3BCLE1BQU0sS0FBSyxHQUFXLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzlCO0tBQU07SUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0NBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpc1JpZ2h0IH0gZnJvbSAnZnAtdHMvbGliL0VpdGhlcic7XG5pbXBvcnQgKiBhcyB0IGZyb20gJ2lvLXRzJztcblxuY29uc3QgSW9Uc0lucHV0VHlwZSA9IHQudHlwZSgge1xuICBhOiB0LkludCxcbiAgYjogdC5JbnQsXG4gIGM6IHQuSW50LFxufSk7XG5cbmV4cG9ydCB0eXBlIElvVHlwZSA9IHQuVHlwZU9mPHR5cGVvZiBJb1RzSW5wdXRUeXBlPlxuY29uc3QgaW5wdXQ6IElvVHlwZSA9IEpTT04ucGFyc2UocHJvY2Vzcy5hcmd2WzJdKTtcblxuY29uc3QgdmFsaWRhdGUgPSBpc1JpZ2h0KElvVHNJbnB1dFR5cGUuZGVjb2RlKGlucHV0KSk7XG5cbmlmICh2YWxpZGF0ZSA9PSB0cnVlKSB7XG4gIGNvbnN0IHRvdGFsOiBudW1iZXIgPSBpbnB1dC5hICsgaW5wdXQuYiArIGlucHV0LmM7XG4gIGNvbnNvbGUubG9nKCdUb3RhbDonLCB0b3RhbCk7XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZygnSW52YWxpZCBEYXRhJyk7XG59XG4iXX0=