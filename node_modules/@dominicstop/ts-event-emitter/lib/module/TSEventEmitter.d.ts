export declare type EventListener<T> = (data: T) => void;
/**
 * ```
 * // 1. Create a string enum...
 * enum Events { Foo = 'Foo', Bar = 'Bar', Baz = 'Baz' };
 *
 * // 1.1. ...or a union of strings (whichever you prefer).
 * type EventKeys = 'Foo' | 'Bar' | 'Baz';
 *
 * // 2. Create the emitter + event map...
 * // * For each key in the event enum, create a map that defines
 * //   the type of event param. the event listener will receive.
 * // * As mentioned in 1.1. you can also use the `EventKeys` union
 * //   in place of the `Events` enum.
 * export const emitter: TSEventEmitter<EventKeys, {
 *   // 2.1. For the event `TestEnum.Foo`, this will be its event object.
 *   Foo: { name: string },
 *
 *   // 2.2. If you don't want to pass an event argument,
 *   // then set it to `null` or `undefined`.
 *   // * This means the event listener won't receive any arguments
 *   //   and you can't pass a data argument to `emit` (see step 4.2.)
 *   Bar: null,
 *
 *   // 2.3. alt. you can make the event param optional.
 *   Baz: null | { age: number }
 * }> = new TSEventEmitter();
 *
 * // 3.1. `event` will be inferred as `(event: { name: string }) => void`
 * emitter.once('Foo', (event) => { console.log(event.name) });
 *
 * // 3.2.`event` will be inferred as `() => void`
 * // * Note: If you try to add an event param, TS produces an error.
 * emitter.once('Bar', () => {});
 *
 * // 3.3. `event` will be inferred as
 * //      `(event: { age: number } | null) => void`
 * // * As such, we need to use the optional operator to access `event`.
 * // * Note: If preferred, you can also use the enum key directly.
 * emitter.once(Events.Baz, (event) => { console.log(event?.age) });
 *
 * // 4. Next, lets broadcast some events...
 * emitter.emit(Events.Foo, { name: 'd'});
 * emitter.emit('Baz', { age: 1 });
 *
 * // 4.1. You can't pass a data argument with the 'Bar' event
 * // * i.e. because of step 2.2., event is defined as `null`.
 * emitter.emit('Bar');
 *
 * // 4.2. We must explicitly pass a null/undefined value for the data
 * // argument since it can be optional (e.g. step 2.3.)
 * emitter.emit('Baz', null);
 * ```
 */
export declare class TSEventEmitter<TKeys extends string, TEventMap extends {
    [k in `${TKeys}`]: any;
}> {
    /** Store the event listeners */
    private listeners;
    addListener<K extends keyof TEventMap>(eventKey: K, listener: EventListener<TEventMap[K]>): {
        unsubscribe: () => void;
    };
    removeListener<K extends keyof TEventMap>(eventKey: K, listenerToRemove: EventListener<TEventMap[K]>): void;
    once<K extends keyof TEventMap>(eventKey: K, listener: EventListener<TEventMap[K]>): {
        unsubscribe: () => void;
    };
    removeAllListeners(): void;
    emit<K extends keyof TEventMap>(eventKey: K, ...data: TEventMap[K] extends (null | undefined) ? [undefined?] : [TEventMap[K]]): void;
}
//# sourceMappingURL=TSEventEmitter.d.ts.map