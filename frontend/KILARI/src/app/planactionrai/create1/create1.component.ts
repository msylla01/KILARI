import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create1',
  templateUrl: './create1.component.html',
  styleUrls: ['./create1.component.scss']
})
export class Create1Component implements OnInit {
  
  
 
  skillsForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}