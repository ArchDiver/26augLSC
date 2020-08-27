import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-topfive-ray',
  templateUrl: './topfive-ray.component.html',
  styleUrls: ['./topfive-ray.component.scss']
})
export class RayComponent implements OnInit {
  bandSongNameDisplay;
  bandNameDisplay;
  bandLyricsDisplay;

  // band Reactive Form
  bandForm = new FormGroup({
    bandName: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
    // band Reactive Form
    songForm = new FormGroup({
      bandSongName: new FormControl('', [Validators.required]),
      bandLyrics: new FormControl('', [Validators.required, Validators.minLength(10)])
    })

  get bandName() {return this.bandForm.get('bandName')}
  get bandSongName() {return this.songForm.get('bandSongName')}
  get bandLyrics() {return this.songForm.get('bandLyrics')}

  // Form Handler for band Reactive From
  onSubmit(){
    console.log(`${this.bandForm.value.bandName}`);

  }
  onSubmit2(){
    console.log(`${this.songForm.value.bandSongName}`);
    console.log(`${this.songForm.value.bandLyrics}`);
  }


  constructor() { }

  ngOnInit(): void {
  }
}