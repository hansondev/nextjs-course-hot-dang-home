import { v4 as uuid } from "uuid";

export const generateBlockIds = (blocksJSON) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));

  const asignBlockIds = (b) => {
    b.forEach((block) => {
      block.id = uuid();
      if (block.innerBlocks?.length) {
        asignBlockIds(block.innerBlocks);
      }
    });
  };
  asignBlockIds(blocks);

  return blocks;
};
