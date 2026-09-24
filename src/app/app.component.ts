import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
  //Datos personales
  nombre = 'Juanma Fernández Rodríguez';
  profesion = 'Desarrollador de Aplicaciones Multiplataforma';
  frase = 'Me apasiona entender cómo funcionan las cosas por dentro, aplicar buenas prácticas';
  idiomas = ['Español (Nativo)', 'Inglés (Intermedio)', 'Italiano (Básico)'];

  //Datos de contacto
  direccion = 'Calle Campanilleros 13, Málaga, España';
  telefono = '+34 643718054';
  correoElectronico = 'juanmafr2007@gmail.com';
  sitioWeb = 'https://juanma-dev-portfolio.vercel.app';
  github = 'Ju4nmaFd3z';

  //Sobre mí
  sobreMi = 'Estudiante de segundo curso de Desarrollo de Aplicaciones Multiplataforma. Me gusta aprender construyendo proyectos reales.';

  //Experiencia profesional
  empresa1 = 'Music Store Campobasso';
  puesto1 = 'Técnico IT';
  periodo1 = 'Marzo-Junio 2025';
  descripcion1 = 'IT support e instalador de sistemas en domicilios particulares y empresas. Además, asesor informático, gestor de la base de datos, actualización de stock, mantenimiento de la página web de la empresa y su servicio de venta al cliente.';

  empresa2 = 'Fix Me Málaga';
  puesto2 = 'Jefe de Automatización';
  periodo2 = 'Marzo-Junio 2026';
  descripcion2 = 'Jefe de automatización, gestor y administrador de la base de datos y asesor de desarrollo y programación en FixMe Málaga.';

  //Formación
  titulo = 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma';
  centro = 'CPIFP Alan Turing';
  periodoFormacion = '2025 - 2027';

  //Tecnologías
  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java', 'Kotlin', 'SQL', 'Git', 'GitHub', 'Supabase', 'Docker'];

  //Pie y fecha
  textoPie = 'Currículum desarrollado con Angular';
  fecha = new Date();
}
