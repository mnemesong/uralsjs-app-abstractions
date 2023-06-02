# uralsjs-app-abstractions
App multiplatform abstraction

## API
```typescript
/**
 * Function renders html by model and id
 */
export type Widget<Model> = (m: Model, id: string) => string;

/**
 * Set of one model data for app
 */
export type ModelSet<M, Id> = {
    widget: Widget<M>,
    idTool: IdTool<number|string>,
    rootSelector: (el: Rec<M, Id>) => string,
    initData: M[],
    stor: ReactiveStorage<M, Id>
}

/**
 * Function regrouping models by group function
 */
export function regroup<M>(
    arr: M[], 
    defSelector: (m: M) => string
): Record<string, M[]> {...}
```
