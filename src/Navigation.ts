
export type RootStackParamsList = {
  Home: undefined; 
  DetectorSpacing: undefined;
  ReductionInDetectorSpacing: undefined;
  HeatDetectorModal: { 
    returnPath: keyof RootStackParamsList,    
  };
  SmokeDetectorModal: { 
    returnPath: keyof RootStackParamsList,  
  };
  VoltageDrop: undefined;
  VDEquationModal: { 
    returnPath: keyof RootStackParamsList,   
  };
  PowerSupplies: undefined;
  PSEquationModal: { 
    returnPath: keyof RootStackParamsList,   
  };
  BatteryCharger: undefined;
  BCEquationModal: { 
    returnPath: keyof RootStackParamsList,   
  };
  
  AmbientSoundLevels: undefined;
  TypicalWiringConfigurations: undefined;
  WiringDiagram1Modal: { 
    returnPath: keyof RootStackParamsList,   
  };
  WiringDiagram2Modal: { 
    returnPath: keyof RootStackParamsList,   
  };
  WiringDiagram3Modal: { 
    returnPath: keyof RootStackParamsList,   
  };
  NICETExamFindingAids: undefined;
  ResistorColorCodes: undefined;
  ResistorColorCodesModal: { 
    returnPath: keyof RootStackParamsList,   
  };
};

