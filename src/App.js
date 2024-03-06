import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { TabComponent } from './Components/Header/TabComponent';
import { Footer } from './Components/Footer/Footer';
import { ValueTab } from './Components/Header/ValueTab';
import { Home } from './Components/HomePage/Home';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/material';

import { Speeddial } from './Components/Speeddial/Speeddial';
import { Route, Routes } from 'react-router-dom';
import { ValuePropositions } from './Components/ValueProposition/ValuePropositions';
import { InnovativeProducts } from './Components/Innovative_Products/InnovativeProducts';
import { Services } from './Components/Services/Services';
import { Publications } from './Components/Publications/Publications';
import { ContactUs } from './Components/ContactUs/ContactUs';
import { ExtendedSupplyChainOptimization } from './Components/ValueProposition/ExtendedSupplyChainOptimization';
import { DataHarmonization } from './Components/Services/DataHarmonization';
import { DataAnalytics } from './Components/Services/DataAnalytics';
import { DataMigration } from './Components/Services/DataMigration';
import { DigitalTransformation } from './Components/Services/DigitalTransformation';
import { DataArchivingandUnarchiving } from './Components/Services/DataArchivingandUnarchiving';
import { ISManagement } from './Components/Services/ISManagement';
import { DataHealthAssessment } from './Components/Services/DataHealthAssessment';
import { PMDataAcquisition } from './Components/Services/PMDataAcquisition';
import ImagingTaggingInventoryOptimization from './Components/Services/ImagingTaggingInventoryOptimization';
import { PVorFDC } from './Components/Services/PVorFDC';
import { BPO } from './Components/Services/BPO';
import { ManagementConsulting } from './Components/Services/ManagementConsulting';
import { FixedAssetRegister } from './Components/Services/FixedAssetRegister';
import { DataConsultingServices } from './Components/Services/DataConsultingServices';
import { SpendAnalytics } from './Components/Services/SpendAnalytics';
import { MaterialCriticalityAnalysis } from './Components/Services/MaterialCriticalityAnalysis';
import { EquipmentCriticalityAnalysis } from './Components/Services/EquipmentCriticalityAnalysis';
import { MasterDataRecordManager } from './Components/Innovative_Products/MasterDataRecordManager';
import { EnduringAssetLifecycleManagement } from './Components/ValueProposition/EnduringAssetLifecycleManagement';
import { BusinessPartnerLifeCycleManagement } from './Components/ValueProposition/BusinessPartnerLifeCycleManagement';
import { SeamlessDataMigration } from './Components/ValueProposition/SeamlessDataMigration';
import { DataQualityManagement } from './Components/Innovative_Products/DataQualityManagement';
import { PiLogPreferredRecords } from './Components/ValueProposition/PiLogPreferredRecords';
import { DataQualityHub } from './Components/Innovative_Products/DataQualityHub';
import { PiLogPreferredHierarchy } from './Components/Innovative_Products/PiLogPreferredHierarchy';
import MasterDataOntologyManager from './Components/Innovative_Products/MasterDataOntologyManager';
import { SparePartsInterchangeabilityRecord } from './Components/Innovative_Products/SparePartsInterchangeabilityRecord';
import { TransformETL } from './Components/Innovative_Products/TransformETL';
import PiLogPreferredOntology from './Components/Innovative_Products/PiLogPreferredOntology';
import { MaterialMasterTaxonomy } from './Components/Innovative_Products/MaterialMasterTaxonomy';
import { Coswin } from './Components/Innovative_Products/Coswin';
import { LeanDataGovernance } from './Components/Innovative_Products/LeanDataGovernance';
import { Videos } from './Components/Publications/Videos';
import { SaaS } from './Components/SaaSPage/SaaS';
import { Brochure } from './Components/Publications/Brochure';
import { Blogs } from './Components/Publications/Blogs';
import { NewsAndUpdates } from './Components/Publications/NewsAndUpdates';
import { HonorAwardsInInformationTechnology } from './Components/NewsData/HonorAwardsInInformationTechnology';
import { DataManagementThinkLab } from './Components/NewsData/DataManagementThinkLab';
import { MasterDataManagement } from './Components/NewsData/MasterDataManagement';
import { Corporate } from './Components/AboutUS/Corporate';
import { ZonalOffices } from './Components/AboutUS/ZonalOffices';
import { IndustriesCustomers } from './Components/AboutUS/IndustriesCustomers';
import { Partners } from './Components/AboutUS/Partners';
import { PartnerProgram } from './Components/AboutUS/PartnerProgram';
import { SapSilverPartner } from './Components/AboutUS/SapSilverPartner';
import { OraclePartnerNetwork } from './Components/AboutUS/OraclePartnerNetwork';
import { SivecoGroupCoswin } from './Components/AboutUS/SivecoGroupCoswin';
import { AdminForm } from './Components/AdminForm/AdminForm';
import { LeadershipTeam } from './Components/AboutUS/LeadershipTeam';
import { GulfHR } from './Components/AboutUS/GulfHR';
import { CoswinNomad } from './Components/Innovative_Products/Coswin/CoswinNomad';
import { CoswinOpen } from './Components/Innovative_Products/Coswin/CoswinOpen';
import { CoswinSmartGeneration } from './Components/Innovative_Products/Coswin/CoswinSmartGeneration';
import { Coswin8i } from './Components/Innovative_Products/Coswin/Coswin8i';
import { PiLogAppointsFormerSAPAndOracleExecutive } from './Components/NewsData/PiLogAppointsFormerSAPAndOracleExecutive';
import { TheEmiratesTimesShinesOnImadSyed } from './Components/NewsData/TheEmiratesTimesShinesOnImadSyed';
import { APITesting } from './Components/AdminForm/APITesting';
import { TopHeader } from './Components/Header/TopHeader';




function App() {
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  return (
    <div className="App">
      
      <header>
        <TopHeader/>
        <Header/>
      </header>
      <main>
       
       
        
       {/* <Home/> */}
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='admin-form' element={<AdminForm/>}/>
          {/* <Route path='api-testing' element={<APITesting/>}/> */}
          <Route path='About/corporate' element={<Corporate/>}/>
          <Route path='About/zonal-offices' element={<ZonalOffices/>}/>
          <Route path='About/Industries-And-Customers' element={<IndustriesCustomers/>}/>
          <Route path='About/Partners' element={<Partners/>}/>
          <Route path='About/Partners/Sap-Silver-Partner' element={<SapSilverPartner/>}/>
          <Route path='About/Partners/Oracle-Partner-Network' element={<OraclePartnerNetwork/>}/>
          <Route path='About/Partners/Siveco-Group-Coswin' element={<SivecoGroupCoswin/>}/>
          <Route path='About/Partners/gulf-hr' element={<GulfHR/>}/>
          <Route path='About/Partner-Program' element={<PartnerProgram/>}/>
          <Route path='About/leadership-team' element={<LeadershipTeam/>}/>
          <Route path='valuepropositons' element={<ValuePropositions/>}/>
          <Route path='value-propositons/ExtendedSupplyChainOptimization' element={<ExtendedSupplyChainOptimization/>}/>
          <Route path='value-propositons/EnduringAssetLifecycleManagement' element={<EnduringAssetLifecycleManagement/>}/>
          <Route path='value-propositons/BusinessPartnerLifeCycleManagement' element={<BusinessPartnerLifeCycleManagement/>}/>
          <Route path='Value-Propositions/Seamless-Data-Migration-and-Effective-Application-Consolidation' element={<SeamlessDataMigration/>}/>
          <Route path='innovative-products' element={<InnovativeProducts/>}/>
          <Route path='innovative-products/DataQualityHub' element={<DataQualityHub/>}/>
          <Route path='innovative-products/DataQualityManagement' element={<DataQualityManagement/>}/>
          <Route path='innovative-products/MasterDataOntologyManager' element={<MasterDataOntologyManager/>}/>
          <Route path='innovative-products/PiLogPreferredRecords' element={<PiLogPreferredRecords/>}/>
          <Route path='innovative-products/DataQualityManagement/PiLogPreferredRecords' element={<PiLogPreferredRecords/>}/>
          <Route path='innovative-products/DataQualityManagement/PiLogPreferredOntology' element={<PiLogPreferredOntology/>}/>
          <Route path='innovative-products/PiLogPreferredOntology' element={<PiLogPreferredOntology/>}/>
          <Route path='innovative-products/PiLogPreferredHierarchy' element={<PiLogPreferredHierarchy/>}/>
          <Route path='innovative-products/DataQualityManagement/PiLogPreferredHierarchy' element={<PiLogPreferredHierarchy/>}/>
          <Route path='innovative-products/SparePartsInterchangeabilityRecord' element={<SparePartsInterchangeabilityRecord/>}/>
          <Route path='innovative-products/iTransformETL' element={<TransformETL/>}/>
          <Route path='innovative-products/MaterialMasterTaxonomy' element={<MaterialMasterTaxonomy/>}/>
          
          <Route path='innovative-products/Coswin' element={<Coswin/>}/>
          <Route path='innovative-products/Coswin/CoswinNomad' element={<CoswinNomad/>}/>
          <Route path='innovative-products/Coswin/CoswinOpen' element={<CoswinOpen/>}/>
          <Route path='innovative-products/Coswin/CoswinSmartGeneration' element={<CoswinSmartGeneration/>}/>
          <Route path='innovative-products/Coswin/Coswin8i' element={<Coswin8i/>}/>

          <Route path='innovative-products/LeanDataGovernance' element={<LeanDataGovernance/>}/>
          <Route path='innovative-products/MasterDataRecordManager' element={<MasterDataRecordManager/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path ='services/DataHarmonization' element={<DataHarmonization/>}/>          
          <Route path ='services/DataAnalytics' element={<DataAnalytics/>}/>
          <Route path ='services/DataMigration' element={<DataMigration/>}/>
          <Route path ='services/DigitalTransformation' element={<DigitalTransformation/>}/>  
          <Route path ='services/ISManagement' element={<ISManagement/>}/>   
          <Route path='services/DataHealthAssessment' element={<DataHealthAssessment/>}/>   
          <Route path ='services/DataArchivingandUnarchiving' element={<DataArchivingandUnarchiving/>}/>
          <Route path='services/PMDataAcquisition' element ={<PMDataAcquisition/>}/>
          <Route path='services/ITIO' element={<ImagingTaggingInventoryOptimization/>}/>
          <Route path='#' element={<BPO/>}/>
          <Route path='services/ManagementConsulting' element={<ManagementConsulting/>}/>
          <Route path='services/FixedAssetRegister' element={<FixedAssetRegister/>}/>
          <Route path='services/DataConsultingServices' element={<DataConsultingServices/>}/>
          <Route path='services/MaterialCriticalityAnalysis' element={<MaterialCriticalityAnalysis/>}/>
          <Route path='services/EquipmentCriticalityAnalysis' element={<EquipmentCriticalityAnalysis/>}/>
          <Route path='services/SpendAnalytics' element={<SpendAnalytics/>}/>
          <Route path='services/pvfdc' element={<PVorFDC/>}/>
          <Route path='publications' element={<Publications/>}/>
          <Route path='publications/Videos' element={<Videos/>}/>
          <Route path='publications/Brochure' element={<Brochure/>}/>
          <Route path='publications/Blogs' element={<Blogs/>}/>
          <Route path='publications/News-and-Updates' element={<NewsAndUpdates/>}/>
          <Route path='publications/News-and-Updates/thinklinkers-9th-data-management-thinkLab' element={<DataManagementThinkLab/>}/>
          <Route path='publications/News-and-Updates/HonorAwardsInInformationTechnology' element={<HonorAwardsInInformationTechnology/>}/>
          <Route path='publications/News-and-Updates/master-data-management-big-data-analytics-blog' element={<MasterDataManagement/>}/>
          <Route path='publications/News-and-Updates/PiLog-Appoints-Former-SAP-And-Oracle-Executive' element={<PiLogAppointsFormerSAPAndOracleExecutive/>}/>
          <Route path='publications/News-and-Updates/the-emirates-times-shines-on-imad-syed' element={<TheEmiratesTimesShinesOnImadSyed/>}/>

          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='Subscription' element={<SaaS/>}/>
          

        </Routes>
      </div>
     
      </main>
      <div className="icon-bar">
  <div className='sticky-icon'>
    <Speeddial/>
   
  </div>
</div>
      <footer>
      <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
