import type { Git } from "./util/types";
import type { Inputs as InIn } from "./inbox";
declare type ConfigIn = {
    login: boolean;
    delay: number;
    pep: string;
    env: string;
    git: Git;
};
declare type Inputs = {
    inbox_in: InIn;
    log_in: ConfigIn;
};
interface Verifier {
    (i: Inputs): Promise<void>;
}
declare const verifier: Verifier;
export { verifier };
