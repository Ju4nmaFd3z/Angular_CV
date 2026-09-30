import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  sobreMi = 'Estudiante de segundo curso de Desarrollo de Aplicaciones Multiplataforma. Me gusta aprender construyendo proyectos reales.';
  empresa1 = 'Music Store Campobasso';
  puesto1 = 'Técnico IT';
  periodo1 = 'Marzo-Junio 2025';
  descripcion1 = 'IT support e instalador de sistemas en domicilios particulares y empresas. Además, asesor informático, gestor de la base de datos, actualización de stock, mantenimiento de la página web de la empresa y su servicio de venta al cliente.';
  empresa2 = 'Fix Me Málaga';
  puesto2 = 'Jefe de Automatización';
  periodo2 = 'Marzo-Junio 2026';
  descripcion2 = 'Jefe de automatización, gestor y administrador de la base de datos y asesor de desarrollo y programación en FixMe Málaga.';
  titulo = 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma';
  centro = 'CPIFP Alan Turing';
  periodoFormacion = '2025 - 2027';
  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java', 'Kotlin', 'SQL', 'Git', 'GitHub', 'Supabase', 'Docker'];
}
