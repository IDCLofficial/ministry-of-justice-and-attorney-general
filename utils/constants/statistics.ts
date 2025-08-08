export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 15,
    suffix: '+',
    label: 'High Court Divisions'
  },
  {
    value: 27,
    label: 'Magisterial Districts'
  },
  {
    value: 47,
    label: 'Customary Courts'
  },
  {
    value: 46,
    suffix: 'yrs',
    label: 'Serving Justice Since 1976'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 15,
    suffix: '+',
    label: 'Court Renovations'
  },
  {
    value: 27,
    label: 'LGAs with Legal Centers'
  },
  {
    value: 6,
    label: 'Ongoing Initiatives'
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Cases Processed Monthly'
  }
];
