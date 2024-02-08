import { Banner } from "@/data/response/banner";
import { Shortcut } from "@/data/response/shortcut";

export interface ShortcutRepoImpl {
  getShortcuts: (

  ) => Promise<Shortcut[]>;


}
