import { IdTool } from "uralsjs-id-html-tools";
import { ReactiveStorage, Rec } from "uralsjs-reactive-storage";

export type Widget<Model> = (m: Model, id: string) => string;

export type ModelSet<M, Id> = {
    widget: Widget<M>,
    idTool: IdTool<number|string>,
    rootSelector: (el: Rec<M, Id>) => string,
    initData: M[],
    stor: ReactiveStorage<M, Id>
}

export function regroup<M>(
    arr: M[], 
    defSelector: (m: M) => string
): Record<string, M[]> {
    var result: {assoc: string, arrs: M[]}[] = [];
    return arr.map(el => ({ds: defSelector(el), m: el}))
        .reduce((prev: Record<string, M[]>, cur) => {
            let pres = {...prev};
            if (Object.keys(prev).filter(k => k === cur.ds).length > 0) {
                pres[cur.ds].push(cur.m);
            } else {
                pres[cur.ds] = [cur.m];
            }
            return pres;
        }, {});
}