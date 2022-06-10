import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  CloudGeneratorConfiguration,
  ImageSize,
} from 'src/app/models/cloud.model';
import { WordCloudService } from 'src/app/services/word-cloud.service';

@Component({
  selector: 'app-cloud-generator',
  templateUrl: './cloud-generator.component.html',
  styleUrls: ['./cloud-generator.component.scss'],
})
export class CloudGeneratorComponent implements OnInit {
  configurationWordCloud: CloudGeneratorConfiguration = {
    format: 'png',
    width: 0,
    height: 0,
    fontScale: 16,
    fontFamily: 'sans-serif',
    scale: 'linear',
    text: '',
  };

  imageSizeList: ImageSize[] = [
    { type: '150 x 150', size: '150' },
    { type: '250 x 250', size: '250' },
    { type: '350 x 350', size: '350' },
    { type: '450 x 450', size: '450' },
  ];

  typeText: number = 0;
  sizeSelected: string = '150';
  word: string = '';
  wordsList: string = '';
  listText: string[] = [];
  urlCloudWord: SafeUrl = '';

  constructor(
    private cloudService: WordCloudService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // this.generateCloudWord();
  }

  generateCloudWord(cloudObject: CloudGeneratorConfiguration): void {
    this.cloudService.generateWordCloud(cloudObject).subscribe((data) => {
      this.urlCloudWord = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data)
      );
    });
  }

  resetTextToCloud(): void {
    this.configurationWordCloud.text = '';
    this.listText = [];
  }

  handleGenerateCloud(): void {
    this.configurationWordCloud.width = +this.sizeSelected;
    this.configurationWordCloud.height = +this.sizeSelected;
    if (this.configurationWordCloud.text.length > 0) {
      this.generateCloudWord(this.configurationWordCloud);
    }
  }

  addWordToList(currentText: string): void {
    if (currentText !== '') {
      this.wordsList +=
        this.wordsList === '' ? `${currentText}` : `, ${currentText}`;
      this.configurationWordCloud.text += `${currentText} `;
    }

    console.log(this.configurationWordCloud.text);
  }
}
