import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  seccion = input<string>();
  sobreMi = 'Estudiante de segundo curso de Desarrollo de Aplicaciones Multiplataforma. Me gusta aprender construyendo proyectos reales.';
  experiencias = [
    {
      id: 1,
      empresa: 'Music Store Campobasso',
      puesto: 'Técnico IT',
      periodo: 'Marzo-Junio 2025',
      descripcion: 'IT support e instalador de sistemas en domicilios particulares y empresas. Además, asesor informático, gestor de la base de datos, actualización de stock, mantenimiento de la página web de la empresa y su servicio de venta al cliente.',
    },
    {
      id: 2,
      empresa: 'Fix Me Málaga',
      puesto: 'Jefe de Automatización',
      periodo: 'Marzo-Junio 2026',
      descripcion: 'Jefe de automatización, gestor y administrador de la base de datos y asesor de desarrollo y programación en FixMe Málaga.',
    },
  ];
  titulo = 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma';
  centro = 'CPIFP Alan Turing';
  periodoFormacion = '2025 - 2027';
  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java', 'Kotlin', 'SQL', 'Git', 'GitHub', 'Supabase', 'Docker'];
  tecnologiaSeleccionada = '';
}
