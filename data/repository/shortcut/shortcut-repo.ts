import { MAIN_BANNER_API, SHORTCUT_API } from "@/constants/base-api";
import axios from "axios";
import { ShortcutRepoImpl } from "./shortcut-repo-interface";
import { Shortcut } from "@/data/response/shortcut";

class ShortcutRepo implements ShortcutRepoImpl {
  async getShortcuts() {
    const result = await axios.get(
      SHORTCUT_API 
    );

    const updatedResult = result.data as Array<any>;
    return updatedResult.map(
      (shortcut) =>
        new Shortcut(
          shortcut["mainShortcutId"],
          shortcut["title"],
          shortcut["imageUrl"],
          shortcut["linkUrl"]
        )
    );
  }
}

export default new ShortcutRepo();
