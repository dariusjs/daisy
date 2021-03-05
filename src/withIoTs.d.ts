import * as t from 'io-ts';
declare const IoTsInputType: t.TypeC<{
    a: t.BrandC<t.NumberC, t.IntBrand>;
    b: t.BrandC<t.NumberC, t.IntBrand>;
    c: t.BrandC<t.NumberC, t.IntBrand>;
}>;
export declare type IoType = t.TypeOf<typeof IoTsInputType>;
export {};
