
export type RootStackParams = {
  Home: undefined; 
  DetectorSpacing: undefined;
  ReductionInDetectorSpacing: undefined;
  HeatDetectorModal: { 
    returnPath: keyof RootStackParams,    
  };
  SmokeDetectorModal: { 
    returnPath: keyof RootStackParams,  
  };
  VoltageDrop: undefined;
  VDEquationModal: { 
    returnPath: keyof RootStackParams,   
  };
  PowerSupplies: undefined;
  PSEquationModal: { 
    returnPath: keyof RootStackParams,   
  };
  BatteryCharger: undefined;
  BCEquationModal: { 
    returnPath: keyof RootStackParams,   
  };
  
  AmbientSoundLevels: undefined;
  TypicalWiringConfigurations: undefined;
  WiringDiagram1Modal: { 
    returnPath: keyof RootStackParams,   
  };
  WiringDiagram2Modal: { 
    returnPath: keyof RootStackParams,   
  };
  WiringDiagram3Modal: { 
    returnPath: keyof RootStackParams,   
  };
  NICETExamFindingAids: undefined;
  ResistorColorCodes: undefined;
  ResistorColorCodesModal: { 
    returnPath: keyof RootStackParams,   
  };
};

