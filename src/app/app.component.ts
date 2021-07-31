import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columnDefs = [
    {
      field: 'Art',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply']
      }
    },
    { field: 'VSNR' },
    {
      field: 'Dringlichkeit',
      cellStyle: params => {
        if (params.value === 'hoch') {
          //mark hoch cells as red
          return { color: 'white', backgroundColor: '#ef0078' };
        }
        if (params.value === 'mittel') {
          //mark hoch cells as red
          return { color: 'white', backgroundColor: '#f2bcf8' };
        }
        if (params.value === 'niedrig') {
          //mark hoch cells as red
          return { color: 'black', backgroundColor: '#fae4fc' };
        }
        return null;
      },
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply']
      }
    },
    {
      field: 'Abschlussquote',
      cellStyle: params => {
        if (params.value === 'hoch') {
          //mark hoch cells as red
          return { color: 'black', backgroundColor: '#75e900' };
        }
        if (params.value === 'mittel') {
          //mark hoch cells as red
          return { color: 'black', backgroundColor: '#c6f68d' };
        }
        if (params.value === 'niedrig') {
          //mark hoch cells as red
          return { color: 'black', backgroundColor: '#f2fde4' };
        }
        return null;
      },
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply']
      }
    },
    { field: 'Verfügbar' },
    { field: 'Aktion' },
    {
      field: 'Status',
      cellStyle: params => {
        if (params.value === 'Offen') {
          //mark hoch cells as red
          return { color: 'white', backgroundColor: '#81D4FA' };
        }
        if (params.value === 'In Arbeit') {
          //mark hoch cells as red
          return { color: 'white', backgroundColor: '#29B6F6' };
        }
        if (params.value === 'Abgeschlossen') {
          //mark hoch cells as red
          return { color: 'white', backgroundColor: '#0277BD' };
        }
        return null;
      },
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply']
      }
    }
  ];

  rowData = [
    {
      Art: 'Positive Schadenabwicklung',
      VSNR: '452835420',
      Dringlichkeit: 'hoch',
      Abschlussquote: 'hoch',
      Verfügbar: '2021-08-04',
      Aktion: 'Kontakt erstellen',
      Status: 'Offen'
    },
    {
      Art: 'Upselling PHV',
      VSNR: '6294205',
      Dringlichkeit: 'niedrig',
      Abschlussquote: 'hoch',
      Verfügbar: '2021-09-04',
      Aktion: 'Kontakt erstellen',
      Status: 'In Arbeit'
    },
    {
      Art: 'Geburtstag 18',
      VSNR: '23423098',
      Dringlichkeit: 'niedrig',
      Abschlussquote: 'hoch',
      Verfügbar: '2021-10-04',
      Aktion: 'Kontakt erstellen',
      Status: 'Offen'
    },
    {
      Art: 'Ablauf Riester Förderung',
      VSNR: '2342356',
      Dringlichkeit: 'mittel',
      Abschlussquote: 'hoch',
      Verfügbar: '2021-08-06',
      Aktion: 'Kontakt erstellen',
      Status: 'In Arbeit'
    },
    {
      Art: 'Vertragsverlängerung',
      VSNR: '75346',
      Dringlichkeit: 'hoch',
      Abschlussquote: 'hoch',
      Verfügbar: '2021-08-12',
      Aktion: 'Kontakt erstellen',
      Status: 'In Arbeit'
    },
    {
      Art: 'Hohe Abschlusswahrscheinlichkeit Zahnzusatz',
      VSNR: '23466236',
      Dringlichkeit: 'niedrig',
      Abschlussquote: 'mittel',
      Verfügbar: '2021-08-14',
      Aktion: 'Kontakt erstellen',
      Status: 'Offen'
    },
    {
      Art: 'Umzug',
      VSNR: '75464352',
      Dringlichkeit: 'mittel',
      Abschlussquote: 'mittel',
      Verfügbar: '2021-08-20',
      Aktion: 'Kontakt erstellen',
      Status: 'Abgeschlossen'
    }
  ];
}
