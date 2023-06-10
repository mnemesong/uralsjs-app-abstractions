import { IdTool } from "uralsjs-id-html-tools";
import { ReactiveStorage, Rec } from "uralsjs-reactive-storage";
export type Widget<Model, Deps> = (m: Model, id: string, d: Deps) => string;
export type ModelSet<M, Id, D> = {
    widget: Widget<M, D>;
    idTool: IdTool<Id>;
    rootSelector: (el: Rec<M, Id>, d: D) => string;
    initData: (d: D) => M[];
    stor: ReactiveStorage<M, Id>;
};
export declare function regroup<M>(arr: M[], defSelector: (m: M) => string): Record<string, M[]>;
