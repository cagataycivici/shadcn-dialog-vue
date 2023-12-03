import { createApp } from 'vue';
import './style.css';
import 'primeicons/primeicons.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ThemeSwitcher from './components/ThemeSwitcher.vue';

const app = createApp(App);

app.component('ThemeSwitcher', ThemeSwitcher);
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('InputText', InputText);
app.use(PrimeVue, {
  unstyled: true,
  pt: {
    button: {
      root: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors transition-duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-gray-100 dark:hover:bg-gray-50/20 h-10 px-4 py-2',
    },
    inputtext: {
      root: `flex h-10 w-full rounded-md border border-input dark:border-gray-500/40 bg-background dark:bg-black px-3 py-2 text-sm text-black dark:text-white ring-offset-background ring-gray-400 dark:ring-gray-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none
      focus-visible:ring-1
      focus-visible:ring-ring
      focus-visible:ring-offset-0
      disabled:cursor-not-allowed disabled:opacity-50
      col-span-3`,
    },
    dialog: {
      root: 'grid w-full max-w-lg gap-4 border dark:border-gray-500/40 bg-white dark:bg-black p-6 shadow-lg duration-200 sm:rounded-lg md:w-full sm:max-w-[425px]',
      headerTitle:
        'text-lg font-semibold leading-none tracking-tight text-black dark:text-white',
      header: 'flex items-center justify-between',
      headerIcons: 'relative',
      closeButton:
        'rounded-sm opacity-70 text-black dark:text-white ring-offset-background rounded-lg transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring ring-offset-background ring-gray-400 dark:ring-gray-50 disabled:pointer-events-none h-4 w-4 flex items-center justify-center absolute -right-3 -top-5',
      closeButtonIcon: 'w-3 h-3',
      mask: 'backdrop-blur-sm',
      transition: ({ props }) => {
        return props.position === 'top'
          ? {
              enterFromClass:
                'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass:
                'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
            }
          : props.position === 'bottom'
          ? {
              enterFromClass: 'opacity-0 scale-75 translate-y-full',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass:
                'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0',
            }
          : props.position === 'left' ||
            props.position === 'topleft' ||
            props.position === 'bottomleft'
          ? {
              enterFromClass:
                'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass:
                'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0',
            }
          : props.position === 'right' ||
            props.position === 'topright' ||
            props.position === 'bottomright'
          ? {
              enterFromClass:
                'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass:
                'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
            }
          : {
              enterFromClass: 'opacity-0 scale-75',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75',
            };
      },
    },
  },
});
app.mount('#app');
