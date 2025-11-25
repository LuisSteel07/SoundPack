# 🧾 Descripción general del proyecto

**SoundPack** es un monorepo diseñado para administrar grandes volúmenes de canciones en un servidor local. Permite a los usuarios crear playlists personalizadas y acceder a toda su biblioteca musical desde múltiples dispositivos, sin depender de servicios externos. Está construido sobre Turborepo, con una arquitectura modular que incluye apps y paquetes reutilizables.

```text
SoundPack/
├── apps/
│   ├── server/       # API (Express)
│   └── web/          # Aplicación principal (Next.js)
├── packages/
│   ├── ui/           # Componentes compartidos (React)
│   ├── eslint-config # Configuración de ESLint
│   └── typescript-config # Configuración de TypeScript
├── .vscode/          # Configuración del editor
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json        # Configuración de Turborepo
```

# ⚙️ Tecnologías utilizadas

- Next.js para frontend
- Express para la API
- React para componentes compartidos
- TypeScript en todo el proyecto
- Turborepo para orquestación de monorepo
- PNPM como gestor de paquetes
- ESLint + Prettier para linting y formato

# 🚀 Instalación y desarrollo

## Requisitos previos

- Node.js ≥ 18
- PNPM instalado globalmente
- Turbo CLI (opcional pero recomendado)

## Instalación

```sh
pnpm install
```

## Desarrollo

```sh
pnpm turbo dev
```

## Build

```sh
pnpm turbo build
```

# 📦 Apps y paquetes

| Nombre                        | Tipo      | Descripcion                                   |
|-------------------------------|-----------|-----------------------------------------------|
| apps/web                      | App       | Interfaz principal para gestionar canciones   |
| apps/server                   | App       | API del proyecto                              |
| packages/ui                   | Paquete   | Componentes React reutilizables               |
| packages/eslint-config        | Paquete   | Configuración de ESLint personalizada         |
| packages/typescript-config    | Paquete   | Configuración de TypeScript compartida        |
