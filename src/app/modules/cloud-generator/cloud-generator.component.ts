import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WordCloudService } from 'src/app/services/word-cloud.service';

@Component({
  selector: 'app-cloud-generator',
  templateUrl: './cloud-generator.component.html',
  styleUrls: ['./cloud-generator.component.scss']
})
export class CloudGeneratorComponent implements OnInit {

  configurationWordCloud = {
    format: "png",
    width: 500,
    height: 500,
    fontScale: 50,
    fontFamily: "sans-serif",
    scale: "linear",
    text: '',
  }

  urlCloudWord: SafeUrl = '';

  constructor(private cloudService: WordCloudService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.generateCloudWord();
  }

  generateCloudWord(): void{ 
    this.configurationWordCloud.text = 'Hello Word, this is a test for cloud generator in angular 13';
    this.cloudService.generateWordCloud(this.configurationWordCloud).subscribe((data) => {
      this.urlCloudWord = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
    });
  }

}
