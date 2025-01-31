"use client"
import Section from '../components/Section';
import { javascriptCheatSheetData } from '../data/CheatJS';
import styles from '@/app/ui/accessories.module.css';
import PlayButton from '@/components/textToSpeechBtn';
import CodeBlock from '../components/CodeBlock';
import GPropTable from '../components/PropTable';
import PrimitivesTable from '../components/PrimitivesTable';
import GmethodTable from '../components/MethodTable';
import GobjectTable from '../components/ObjectTable';
import APITable from '../components/APITables';
import { globalProperties, primitiveDataTypes, builtInFunctions, builtInObjects, domBomAPI } from '../data/dataJS';
import { handleSave } from '@/api/generatePDF';

export const JavaScriptCheatSheet = () => {
  const legacyMethods = [
    'document.createElement("<html_element>");',
    'document.documentElement.setAttribute("attr", "value");',
    '<html_element>.getElementById("id");',
    '<html_element>.getElementsByTagName("tag");',
    '<html_element>.querySelector("#classname");',
    '<parent_element>.appendChild(<child_element>);',
    'Object.hasOwn(<html_element>, match);',
    'window.location.replace("filename.html");',
    '<link rel="stylesheet" href="filepath_to_css">;',
  ]
  const legacySnippets = [
    'const dataArray = [];',
    'const headerArray = ["header1", "header2"];',
    'const page = document.querySelector("#classname") as HTMLDivElement;',
    'const table = page.querySelector("table") as HTMLTableElement;',
    'const thead = table.querySelector("thead") as HTMLTableSectionElement;',
    'const tbody = table.querySelector("tbody") as HTMLTableSectionElement;',
    'const cap = document.createElement("caption") as HTMLTableCaptionElement;',
    'cap.innerHTML = "captions";',
    'table.appendChild(cap);',
    'const trow = document.createElement("tr") as HTMLTableRowElement;',
    'thead.appendChild(trow);',
    'for (let str of headerArray) {',
    '  const head = document.createElement("th");',
    '  head.innerHTML = str;',
    '  trow.appendChild(head);',
    '}',
  ];
  const falsyValues = [
    "false",
    "0",
    "-0",
    "0n",
    '""',
    "''",
    "``",
    "null",
    "undefined",
    "NaN",
  ];
  
  const truthyValues = [
    "true",
    "any number other than 0",
    "any non-empty string",
    "Infinity",
    "-Infinity",
    "Symbol",
    "BigInt",
    "objects",
  ];
  return (
    <div className="page-wrap">
      <span className={styles.blogTitle}>JavaScript Cheat Sheet</span>
      <PlayButton />
      <ul className="white-board">
        <span>Falsy Values</span>
        <CodeBlock code={falsyValues.join("\n")}/>
        <span>Truthy Values</span>
        <CodeBlock code={truthyValues.join("\n")}/>
        {javascriptCheatSheetData.map((section, index) => (
          <Section key={index} title={section.title} content={section.content} />
        ))}
        <span>General Idea of Legacy Code I used before switching to NextJS</span>
        <CodeBlock code={legacyMethods.join("\n")} />
        <CodeBlock code={legacySnippets.join("\n")} />
      </ul>

      <GPropTable data={globalProperties} title="Global Properties" onSave={handleSave}/>
      <PrimitivesTable data={primitiveDataTypes} title="Primitives" onSave={handleSave}/>
      <GmethodTable data={builtInFunctions} title="Built In Functions" onSave={handleSave}/>
      <GobjectTable data={builtInObjects} title="Built In Objects" onSave={handleSave}/>
      <APITable data={domBomAPI} title="DOM APIs" onSave={handleSave}/>
    </div>
  );
};