import { IdTool } from "uralsjs-id-html-tools";
import { ReactiveStorage, Rec } from "uralsjs-reactive-storage";
export type Widget<Model> = (m: Model, id: string) => string;
export type ModelSet<M, Id> = {
    widget: Widget<M>;
    idTool: IdTool<number | string>;
    rootSelector: (el: Rec<M, Id>) => string;
    initData: M[];
    stor: ReactiveStorage<M, Id>;
};
export declare function regroup<M>(arr: M[], defSelector: (m: M) => string): Record<string, M[]>;
