import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-nova-critica',
  templateUrl: './nova-critica.page.html',
  styleUrls: ['./nova-critica.page.scss'],
  standalone: false,
})
export class NovaCriticaPage implements OnInit {
  criticaForm: FormGroup;
  filmeId: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private storage: StorageService
  ) {
    this.criticaForm = this.fb.group({
      texto: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    this.filmeId = this.route.snapshot.paramMap.get('id') || '';
  }

  async guardarCritica() {
    if (this.criticaForm.valid && this.filmeId) {
      const critica = this.criticaForm.value.texto;
      const key = `criticas-${this.filmeId}`;
      const criticasExistentes = await this.storage.get(key) || [];
      criticasExistentes.push(critica);
      await this.storage.set(key, criticasExistentes);
      this.criticaForm.reset();
      alert('Crítica guardada com sucesso!');
    }
  }
}
