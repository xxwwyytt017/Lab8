const formatVolumeIconPath = require('../assets/scripts/main');

describe("icon volume level", () => {

        test('icon level should be 3', () => {
                expect(formatVolumeIconPath(100)).toContain('3');
        });

        test('icon level should be 2', () => {
                expect(formatVolumeIconPath(54)).toContain('2');
        });

        test('icon level should be 1', () => {
                expect(formatVolumeIconPath(20)).toContain('1');
        });

        test('icon level should be 0', () => {
                expect(formatVolumeIconPath(0)).toContain('0');
        });

        test('icon level should be 3', () => {
                expect(formatVolumeIconPath(67)).toContain('3');
        });

        test('icon level should be 2', () => {
                expect(formatVolumeIconPath(66)).toContain('2');
        });

        test('icon level should be 2', () => {
                expect(formatVolumeIconPath(34)).toContain('2');
        });

        test('icon level should be 1', () => {
                expect(formatVolumeIconPath(33)).toContain('1');
        });

        test('icon level should be 0', () => {
                expect(formatVolumeIconPath(0)).toContain('0');
        });
});