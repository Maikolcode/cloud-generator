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
    fontScale: 26,
    fontFamily: 'sans-serif',
    scale: 'linear',
    text: '',
  };

  imageSizeList: ImageSize[] = [
    { type: '450 x 450', height: '450', width: '450', id: 1 },
    { type: '600 x 450', height: '450', width: '600', id: 2 },
    { type: '800 x 450', height: '450', width: '800', id: 3 },
    { type: '1000 x 450', height: '450', width: '1000', id: 4 },
  ];

  urlCloudWord: SafeUrl = '';
  fileName: string = 'cloud.png';
  sizeSelected: number = 1;

  constructor(
    private cloudService: WordCloudService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.changeImageSizeSelection(this.sizeSelected);
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
  }

  changeImageSizeSelection(sizeId: number): void {
    let sizeSelected = this.imageSizeList.find((size) => size.id === sizeId);

    if (sizeSelected) {
      this.configurationWordCloud.width = +sizeSelected.width;
      this.configurationWordCloud.height = +sizeSelected.height;
    }
  }

  handleValidateFields(): boolean {
    return this.configurationWordCloud.text === '' || this.fileName === '';
  }

  handleGenerateCloud(): void {
    this.generateCloudWord(this.configurationWordCloud);
  }

  returnFileName(): string {
    return this.fileName.includes('.png')
      ? this.fileName
      : `${this.fileName}.png`;
  }
}
