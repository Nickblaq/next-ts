import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import Image from "next/image";
import { type } from "os";
import { createElement, ElementType} from "react";

// Goal: A small script to transform array of blocks data of type
// OutputData, detect block type, extract just content, arrange them according to original
// block data array index and return the transformed data, can also replace with Custom component basrd on type block.

// functionalilities:
// - detect block type
// - extract just content
// - arrange them according to original block data array index
// - return the transformed data
// - can also replace with Custom component basrd on type block

// type BlockType = Block["type"];
// type BlockContent = Block["data"]["text"];
// TODO: type BlockContent can be text for type paragraph, 
// array of items for type List, type Heading, with levels(1 - 6) for type heading...
// const detectBlockType = (block: Block): BlockType => {
//   return block.type;
// }

// const extractBlockContent = (blockType: BlockType): string => {

// }
    

type Transformer = (
    blocks: OutputData["blocks"],
    index: number
) => OutputData["blocks"];

// const transform: Transformer = (blocks, index) => {
//     const block = blocks[index];
//     const blockType = block.type;
//     const blockContent = block.data.text;
//     return [...blocks.slice(0, index), { type: blockType, data: { text: blockContent } }];
// };


const ImageX = props => <Image alt="" src={props.src} />;
const Paragraph = props => <p>{props.children}</p>;
const Text = props => <p>{props.children}</p>;
const List = props =>
 <p>{props.children}</p>;
const custom = [List, Paragraph]




type EditorType = [
  'paragraph', 
  'list' 
]


type BCType = Block['data'][]
type BlockType = Block["type"];
type Block = OutputData["blocks"][number];

const detectBlockType = (block: Block): BlockType => {
  return block.type;
}


const extractEl = (block: BlockType): any => {
    const blockX = block;

    if (blockX === 'paragraph') {
        return <Paragraph>{}</Paragraph>
    } else if (blockX === 'list') {
        return <h1>{}</h1>
    }
}



// TODO:
// 1. Take type of block as argument e.g 'paragraph'
// 2. loop through array of components
// 3. for each component in array, find where component equal blockType
// 4. if there extract element

//  function bolockContent (blocktype: BlockType): any {
//   const blockT = blocktype
//   const data = Object.keys(components).map((cp) =>{
//     return cp[blockT]
//   })
//   return data
// }


export async function transform (blocks: OutputData["blocks"], index: number): Promise<OutputData["blocks"]> {
    const block = blocks[index];
    const blockType = block.type;
    // const blockContent = block.data.text;
     const blockContent = block.data
     const el = extractEl(block.type)

    return [
        ...blocks.slice(0, index), {
         type: blockType, 
         data: {
         text: blockContent 
        } }];
}

