import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "My father drove nine hundred miles to scatter my mother's ashes in a sea she never saw, fighting me over the radio through three states, until the tires hit sand and he cut the engine and the surf said the words neither of us could.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
