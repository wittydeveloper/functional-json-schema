import { schema, types, constraints } from '../lib/index';


describe('types', () => {

    test('type()', () => {
        expect(
            types.type('string')
        ).toEqual({
            "required": false,
            "rawType": { "type": "string" }
        });
    });

    test('required()', () => {
        expect(
            constraints.required(types.type('string'), true)
        ).toEqual({
            "required": true,
            "rawType": { "type": "string" }
        });
    });

    test('normalize()', () => {
        expect(
            types.normalize('string')
        ).toEqual({
            "required": false,
            "rawType": { "type": "string" }
        });
    });

    describe('arrayOf()', () => {
        test('arrayOf() from JSONSchema6TypeName', () => {
            expect(
                types.arrayOf('string')
            ).toEqual({
                "required": false,
                "rawType": {
                    "items": { "type": "string" },
                    "type": "array"
                }
            });
        });
        test('arrayOf() from TypeDescriptor', () => {
            expect(
                types.arrayOf(types.type('string'))
            ).toEqual({
                "required": false,
                "rawType": {
                    "items": { "type": "string" },
                    "type": "array"
                }
            });
        });
    });
});
