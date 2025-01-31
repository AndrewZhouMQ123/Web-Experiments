"use client"
import NPMTable from '../components/NPMTable';
import npmCommands from "../data/npmCMD";
import { handleSave } from '@/api/generatePDF';
import styles from '@/app/ui/accessories.module.css';
import PlayButton from '@/components/textToSpeechBtn';

const NpmPage = () => {
  return (
    <div className="page-wrap">
      <span className={styles.blogTitle}>NPM Cheat Sheet</span>
      <PlayButton />
      <NPMTable data={npmCommands} title="NPM Commands" onSave={handleSave}/>
    </div>
  );
};

export default NpmPage;