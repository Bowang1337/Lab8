/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 test('push settings', () => {
    test = pushToHistory('settings', 1);
    expect(test.state).toEqual({ page: 'settings' });
    expect(test.length).toBe(2);
    
    expect(document.URL.substr(document.URL.lastIndexOf('/') + 1)).toBe('#settings');
 });
 
 test('push entry', () => {
    test = pushToHistory('entry', 1);
    expect(test.state).toEqual({ page: `entry1` });
    expect(test.length).toBe(3);
    
    expect(document.URL.substr(document.URL.lastIndexOf('/') + 1)).toBe('#entry1');
 });

 test('push home', () => {
    test = pushToHistory('home', 1);
    expect(test.state).toEqual({});
    expect(test.length).toBe(4);

    expect(document.URL.substr(document.URL.lastIndexOf('/') + 1)).toBe('');
});