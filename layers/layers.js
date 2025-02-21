var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UFZUrbanFloodwayZone_2 = new ol.format.GeoJSON();
var features_UFZUrbanFloodwayZone_2 = format_UFZUrbanFloodwayZone_2.readFeatures(json_UFZUrbanFloodwayZone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UFZUrbanFloodwayZone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UFZUrbanFloodwayZone_2.addFeatures(features_UFZUrbanFloodwayZone_2);
var lyr_UFZUrbanFloodwayZone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UFZUrbanFloodwayZone_2, 
                style: style_UFZUrbanFloodwayZone_2,
                popuplayertitle: 'UFZ - Urban Floodway Zone',
                interactive: false,
                title: '<img src="styles/legend/UFZUrbanFloodwayZone_2.png" /> UFZ - Urban Floodway Zone'
            });
var format_TRZ3TransportZone3Signif_3 = new ol.format.GeoJSON();
var features_TRZ3TransportZone3Signif_3 = format_TRZ3TransportZone3Signif_3.readFeatures(json_TRZ3TransportZone3Signif_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ3TransportZone3Signif_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ3TransportZone3Signif_3.addFeatures(features_TRZ3TransportZone3Signif_3);
var lyr_TRZ3TransportZone3Signif_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ3TransportZone3Signif_3, 
                style: style_TRZ3TransportZone3Signif_3,
                popuplayertitle: 'TRZ3 - Transport Zone 3-Signif',
                interactive: false,
                title: '<img src="styles/legend/TRZ3TransportZone3Signif_3.png" /> TRZ3 - Transport Zone 3-Signif'
            });
var format_TRZ2TransportZone2Princi_4 = new ol.format.GeoJSON();
var features_TRZ2TransportZone2Princi_4 = format_TRZ2TransportZone2Princi_4.readFeatures(json_TRZ2TransportZone2Princi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ2TransportZone2Princi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ2TransportZone2Princi_4.addFeatures(features_TRZ2TransportZone2Princi_4);
var lyr_TRZ2TransportZone2Princi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ2TransportZone2Princi_4, 
                style: style_TRZ2TransportZone2Princi_4,
                popuplayertitle: 'TRZ2 - Transport Zone 2-Princi',
                interactive: false,
                title: '<img src="styles/legend/TRZ2TransportZone2Princi_4.png" /> TRZ2 - Transport Zone 2-Princi'
            });
var format_TRZ1TransportZone1State_5 = new ol.format.GeoJSON();
var features_TRZ1TransportZone1State_5 = format_TRZ1TransportZone1State_5.readFeatures(json_TRZ1TransportZone1State_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ1TransportZone1State_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ1TransportZone1State_5.addFeatures(features_TRZ1TransportZone1State_5);
var lyr_TRZ1TransportZone1State_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ1TransportZone1State_5, 
                style: style_TRZ1TransportZone1State_5,
                popuplayertitle: 'TRZ1 - Transport Zone 1-State ',
                interactive: false,
                title: '<img src="styles/legend/TRZ1TransportZone1State_5.png" /> TRZ1 - Transport Zone 1-State '
            });
var format_SUZSpecialUseZone_6 = new ol.format.GeoJSON();
var features_SUZSpecialUseZone_6 = format_SUZSpecialUseZone_6.readFeatures(json_SUZSpecialUseZone_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUZSpecialUseZone_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUZSpecialUseZone_6.addFeatures(features_SUZSpecialUseZone_6);
var lyr_SUZSpecialUseZone_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUZSpecialUseZone_6, 
                style: style_SUZSpecialUseZone_6,
                popuplayertitle: 'SUZ - Special Use Zone',
                interactive: false,
                title: '<img src="styles/legend/SUZSpecialUseZone_6.png" /> SUZ - Special Use Zone'
            });
var format_RGZResidentialGrowthZone_7 = new ol.format.GeoJSON();
var features_RGZResidentialGrowthZone_7 = format_RGZResidentialGrowthZone_7.readFeatures(json_RGZResidentialGrowthZone_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RGZResidentialGrowthZone_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RGZResidentialGrowthZone_7.addFeatures(features_RGZResidentialGrowthZone_7);
var lyr_RGZResidentialGrowthZone_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RGZResidentialGrowthZone_7, 
                style: style_RGZResidentialGrowthZone_7,
                popuplayertitle: 'RGZ - Residential Growth Zone',
                interactive: false,
                title: '<img src="styles/legend/RGZResidentialGrowthZone_7.png" /> RGZ - Residential Growth Zone'
            });
var format_RCZRuralConservationZone_8 = new ol.format.GeoJSON();
var features_RCZRuralConservationZone_8 = format_RCZRuralConservationZone_8.readFeatures(json_RCZRuralConservationZone_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCZRuralConservationZone_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCZRuralConservationZone_8.addFeatures(features_RCZRuralConservationZone_8);
var lyr_RCZRuralConservationZone_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCZRuralConservationZone_8, 
                style: style_RCZRuralConservationZone_8,
                popuplayertitle: 'RCZ - Rural Conservation Zone',
                interactive: false,
                title: '<img src="styles/legend/RCZRuralConservationZone_8.png" /> RCZ - Rural Conservation Zone'
            });
var format_R1ZResidential1Zonesupe_9 = new ol.format.GeoJSON();
var features_R1ZResidential1Zonesupe_9 = format_R1ZResidential1Zonesupe_9.readFeatures(json_R1ZResidential1Zonesupe_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1ZResidential1Zonesupe_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1ZResidential1Zonesupe_9.addFeatures(features_R1ZResidential1Zonesupe_9);
var lyr_R1ZResidential1Zonesupe_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R1ZResidential1Zonesupe_9, 
                style: style_R1ZResidential1Zonesupe_9,
                popuplayertitle: 'R1Z - Residential 1 Zone (supe',
                interactive: false,
                title: '<img src="styles/legend/R1ZResidential1Zonesupe_9.png" /> R1Z - Residential 1 Zone (supe'
            });
var format_PUZ7PublicUseZoneOtherP_10 = new ol.format.GeoJSON();
var features_PUZ7PublicUseZoneOtherP_10 = format_PUZ7PublicUseZoneOtherP_10.readFeatures(json_PUZ7PublicUseZoneOtherP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ7PublicUseZoneOtherP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ7PublicUseZoneOtherP_10.addFeatures(features_PUZ7PublicUseZoneOtherP_10);
var lyr_PUZ7PublicUseZoneOtherP_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ7PublicUseZoneOtherP_10, 
                style: style_PUZ7PublicUseZoneOtherP_10,
                popuplayertitle: 'PUZ7 - Public Use Zone-Other P',
                interactive: false,
                title: '<img src="styles/legend/PUZ7PublicUseZoneOtherP_10.png" /> PUZ7 - Public Use Zone-Other P'
            });
var format_PUZ6PublicUseZoneLocalG_11 = new ol.format.GeoJSON();
var features_PUZ6PublicUseZoneLocalG_11 = format_PUZ6PublicUseZoneLocalG_11.readFeatures(json_PUZ6PublicUseZoneLocalG_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ6PublicUseZoneLocalG_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ6PublicUseZoneLocalG_11.addFeatures(features_PUZ6PublicUseZoneLocalG_11);
var lyr_PUZ6PublicUseZoneLocalG_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ6PublicUseZoneLocalG_11, 
                style: style_PUZ6PublicUseZoneLocalG_11,
                popuplayertitle: 'PUZ6 - Public Use Zone-Local G',
                interactive: false,
                title: '<img src="styles/legend/PUZ6PublicUseZoneLocalG_11.png" /> PUZ6 - Public Use Zone-Local G'
            });
var format_PUZ5PublicUseZoneCemeter_12 = new ol.format.GeoJSON();
var features_PUZ5PublicUseZoneCemeter_12 = format_PUZ5PublicUseZoneCemeter_12.readFeatures(json_PUZ5PublicUseZoneCemeter_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ5PublicUseZoneCemeter_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ5PublicUseZoneCemeter_12.addFeatures(features_PUZ5PublicUseZoneCemeter_12);
var lyr_PUZ5PublicUseZoneCemeter_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ5PublicUseZoneCemeter_12, 
                style: style_PUZ5PublicUseZoneCemeter_12,
                popuplayertitle: 'PUZ5 - Public Use Zone-Cemeter',
                interactive: false,
                title: '<img src="styles/legend/PUZ5PublicUseZoneCemeter_12.png" /> PUZ5 - Public Use Zone-Cemeter'
            });
var format_PUZ3PublicUseZoneHealth_13 = new ol.format.GeoJSON();
var features_PUZ3PublicUseZoneHealth_13 = format_PUZ3PublicUseZoneHealth_13.readFeatures(json_PUZ3PublicUseZoneHealth_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ3PublicUseZoneHealth_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ3PublicUseZoneHealth_13.addFeatures(features_PUZ3PublicUseZoneHealth_13);
var lyr_PUZ3PublicUseZoneHealth_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ3PublicUseZoneHealth_13, 
                style: style_PUZ3PublicUseZoneHealth_13,
                popuplayertitle: 'PUZ3 - Public Use Zone-Health ',
                interactive: false,
                title: '<img src="styles/legend/PUZ3PublicUseZoneHealth_13.png" /> PUZ3 - Public Use Zone-Health '
            });
var format_PUZ2PublicUseZoneEducati_14 = new ol.format.GeoJSON();
var features_PUZ2PublicUseZoneEducati_14 = format_PUZ2PublicUseZoneEducati_14.readFeatures(json_PUZ2PublicUseZoneEducati_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ2PublicUseZoneEducati_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ2PublicUseZoneEducati_14.addFeatures(features_PUZ2PublicUseZoneEducati_14);
var lyr_PUZ2PublicUseZoneEducati_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ2PublicUseZoneEducati_14, 
                style: style_PUZ2PublicUseZoneEducati_14,
                popuplayertitle: 'PUZ2 - Public Use Zone-Educati',
                interactive: false,
                title: '<img src="styles/legend/PUZ2PublicUseZoneEducati_14.png" /> PUZ2 - Public Use Zone-Educati'
            });
var format_PUZ1PublicUseZoneService_15 = new ol.format.GeoJSON();
var features_PUZ1PublicUseZoneService_15 = format_PUZ1PublicUseZoneService_15.readFeatures(json_PUZ1PublicUseZoneService_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ1PublicUseZoneService_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ1PublicUseZoneService_15.addFeatures(features_PUZ1PublicUseZoneService_15);
var lyr_PUZ1PublicUseZoneService_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ1PublicUseZoneService_15, 
                style: style_PUZ1PublicUseZoneService_15,
                popuplayertitle: 'PUZ1 - Public Use Zone-Service',
                interactive: false,
                title: '<img src="styles/legend/PUZ1PublicUseZoneService_15.png" /> PUZ1 - Public Use Zone-Service'
            });
var format_PPRZPublicParkandRecreat_16 = new ol.format.GeoJSON();
var features_PPRZPublicParkandRecreat_16 = format_PPRZPublicParkandRecreat_16.readFeatures(json_PPRZPublicParkandRecreat_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPRZPublicParkandRecreat_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPRZPublicParkandRecreat_16.addFeatures(features_PPRZPublicParkandRecreat_16);
var lyr_PPRZPublicParkandRecreat_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPRZPublicParkandRecreat_16, 
                style: style_PPRZPublicParkandRecreat_16,
                popuplayertitle: 'PPRZ - Public Park and Recreat',
                interactive: false,
                title: '<img src="styles/legend/PPRZPublicParkandRecreat_16.png" /> PPRZ - Public Park and Recreat'
            });
var format_PCRZPublicConservationand_17 = new ol.format.GeoJSON();
var features_PCRZPublicConservationand_17 = format_PCRZPublicConservationand_17.readFeatures(json_PCRZPublicConservationand_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCRZPublicConservationand_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCRZPublicConservationand_17.addFeatures(features_PCRZPublicConservationand_17);
var lyr_PCRZPublicConservationand_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCRZPublicConservationand_17, 
                style: style_PCRZPublicConservationand_17,
                popuplayertitle: 'PCRZ - Public Conservation and',
                interactive: false,
                title: '<img src="styles/legend/PCRZPublicConservationand_17.png" /> PCRZ - Public Conservation and'
            });
var format_NRZNeighbourhoodResidentia_18 = new ol.format.GeoJSON();
var features_NRZNeighbourhoodResidentia_18 = format_NRZNeighbourhoodResidentia_18.readFeatures(json_NRZNeighbourhoodResidentia_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NRZNeighbourhoodResidentia_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NRZNeighbourhoodResidentia_18.addFeatures(features_NRZNeighbourhoodResidentia_18);
var lyr_NRZNeighbourhoodResidentia_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NRZNeighbourhoodResidentia_18, 
                style: style_NRZNeighbourhoodResidentia_18,
                popuplayertitle: 'NRZ - Neighbourhood Residentia',
                interactive: false,
                title: '<img src="styles/legend/NRZNeighbourhoodResidentia_18.png" /> NRZ - Neighbourhood Residentia'
            });
var format_MUZMixedUseZone_19 = new ol.format.GeoJSON();
var features_MUZMixedUseZone_19 = format_MUZMixedUseZone_19.readFeatures(json_MUZMixedUseZone_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUZMixedUseZone_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUZMixedUseZone_19.addFeatures(features_MUZMixedUseZone_19);
var lyr_MUZMixedUseZone_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUZMixedUseZone_19, 
                style: style_MUZMixedUseZone_19,
                popuplayertitle: 'MUZ - Mixed Use Zone',
                interactive: false,
                title: '<img src="styles/legend/MUZMixedUseZone_19.png" /> MUZ - Mixed Use Zone'
            });
var format_LDRZLowDensityResidential_20 = new ol.format.GeoJSON();
var features_LDRZLowDensityResidential_20 = format_LDRZLowDensityResidential_20.readFeatures(json_LDRZLowDensityResidential_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LDRZLowDensityResidential_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LDRZLowDensityResidential_20.addFeatures(features_LDRZLowDensityResidential_20);
var lyr_LDRZLowDensityResidential_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LDRZLowDensityResidential_20, 
                style: style_LDRZLowDensityResidential_20,
                popuplayertitle: 'LDRZ - Low Density Residential',
                interactive: false,
                title: '<img src="styles/legend/LDRZLowDensityResidential_20.png" /> LDRZ - Low Density Residential'
            });
var format_IN1ZIndustrial1Zone_21 = new ol.format.GeoJSON();
var features_IN1ZIndustrial1Zone_21 = format_IN1ZIndustrial1Zone_21.readFeatures(json_IN1ZIndustrial1Zone_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN1ZIndustrial1Zone_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN1ZIndustrial1Zone_21.addFeatures(features_IN1ZIndustrial1Zone_21);
var lyr_IN1ZIndustrial1Zone_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN1ZIndustrial1Zone_21, 
                style: style_IN1ZIndustrial1Zone_21,
                popuplayertitle: 'IN1Z - Industrial 1 Zone',
                interactive: false,
                title: '<img src="styles/legend/IN1ZIndustrial1Zone_21.png" /> IN1Z - Industrial 1 Zone'
            });
var format_GWZGreenWedgeZone_22 = new ol.format.GeoJSON();
var features_GWZGreenWedgeZone_22 = format_GWZGreenWedgeZone_22.readFeatures(json_GWZGreenWedgeZone_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GWZGreenWedgeZone_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GWZGreenWedgeZone_22.addFeatures(features_GWZGreenWedgeZone_22);
var lyr_GWZGreenWedgeZone_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GWZGreenWedgeZone_22, 
                style: style_GWZGreenWedgeZone_22,
                popuplayertitle: 'GWZ - Green Wedge Zone',
                interactive: false,
                title: '<img src="styles/legend/GWZGreenWedgeZone_22.png" /> GWZ - Green Wedge Zone'
            });
var format_GRZGeneralResidentialZone_23 = new ol.format.GeoJSON();
var features_GRZGeneralResidentialZone_23 = format_GRZGeneralResidentialZone_23.readFeatures(json_GRZGeneralResidentialZone_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRZGeneralResidentialZone_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRZGeneralResidentialZone_23.addFeatures(features_GRZGeneralResidentialZone_23);
var lyr_GRZGeneralResidentialZone_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRZGeneralResidentialZone_23, 
                style: style_GRZGeneralResidentialZone_23,
                popuplayertitle: 'GRZ - General Residential Zone',
                interactive: false,
                title: '<img src="styles/legend/GRZGeneralResidentialZone_23.png" /> GRZ - General Residential Zone'
            });
var format_FZFarmingZone_24 = new ol.format.GeoJSON();
var features_FZFarmingZone_24 = format_FZFarmingZone_24.readFeatures(json_FZFarmingZone_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FZFarmingZone_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FZFarmingZone_24.addFeatures(features_FZFarmingZone_24);
var lyr_FZFarmingZone_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FZFarmingZone_24, 
                style: style_FZFarmingZone_24,
                popuplayertitle: 'FZ - Farming Zone',
                interactive: false,
                title: '<img src="styles/legend/FZFarmingZone_24.png" /> FZ - Farming Zone'
            });
var format_CDZComprehensiveDevelopmen_25 = new ol.format.GeoJSON();
var features_CDZComprehensiveDevelopmen_25 = format_CDZComprehensiveDevelopmen_25.readFeatures(json_CDZComprehensiveDevelopmen_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDZComprehensiveDevelopmen_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDZComprehensiveDevelopmen_25.addFeatures(features_CDZComprehensiveDevelopmen_25);
var lyr_CDZComprehensiveDevelopmen_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CDZComprehensiveDevelopmen_25, 
                style: style_CDZComprehensiveDevelopmen_25,
                popuplayertitle: 'CDZ - Comprehensive Developmen',
                interactive: false,
                title: '<img src="styles/legend/CDZComprehensiveDevelopmen_25.png" /> CDZ - Comprehensive Developmen'
            });
var format_C2ZCommercial2Zone_26 = new ol.format.GeoJSON();
var features_C2ZCommercial2Zone_26 = format_C2ZCommercial2Zone_26.readFeatures(json_C2ZCommercial2Zone_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C2ZCommercial2Zone_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C2ZCommercial2Zone_26.addFeatures(features_C2ZCommercial2Zone_26);
var lyr_C2ZCommercial2Zone_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C2ZCommercial2Zone_26, 
                style: style_C2ZCommercial2Zone_26,
                popuplayertitle: 'C2Z - Commercial 2 Zone',
                interactive: false,
                title: '<img src="styles/legend/C2ZCommercial2Zone_26.png" /> C2Z - Commercial 2 Zone'
            });
var format_C1ZCommercial1Zone_27 = new ol.format.GeoJSON();
var features_C1ZCommercial1Zone_27 = format_C1ZCommercial1Zone_27.readFeatures(json_C1ZCommercial1Zone_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C1ZCommercial1Zone_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C1ZCommercial1Zone_27.addFeatures(features_C1ZCommercial1Zone_27);
var lyr_C1ZCommercial1Zone_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C1ZCommercial1Zone_27, 
                style: style_C1ZCommercial1Zone_27,
                popuplayertitle: 'C1Z - Commercial 1 Zone',
                interactive: false,
                title: '<img src="styles/legend/C1ZCommercial1Zone_27.png" /> C1Z - Commercial 1 Zone'
            });
var format_B5ZBusiness5ZoneSuperce_28 = new ol.format.GeoJSON();
var features_B5ZBusiness5ZoneSuperce_28 = format_B5ZBusiness5ZoneSuperce_28.readFeatures(json_B5ZBusiness5ZoneSuperce_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B5ZBusiness5ZoneSuperce_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B5ZBusiness5ZoneSuperce_28.addFeatures(features_B5ZBusiness5ZoneSuperce_28);
var lyr_B5ZBusiness5ZoneSuperce_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B5ZBusiness5ZoneSuperce_28, 
                style: style_B5ZBusiness5ZoneSuperce_28,
                popuplayertitle: 'B5Z - Business 5 Zone (Superce',
                interactive: false,
                title: '<img src="styles/legend/B5ZBusiness5ZoneSuperce_28.png" /> B5Z - Business 5 Zone (Superce'
            });
var format_B4ZBusiness4ZoneSuperce_29 = new ol.format.GeoJSON();
var features_B4ZBusiness4ZoneSuperce_29 = format_B4ZBusiness4ZoneSuperce_29.readFeatures(json_B4ZBusiness4ZoneSuperce_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B4ZBusiness4ZoneSuperce_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B4ZBusiness4ZoneSuperce_29.addFeatures(features_B4ZBusiness4ZoneSuperce_29);
var lyr_B4ZBusiness4ZoneSuperce_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B4ZBusiness4ZoneSuperce_29, 
                style: style_B4ZBusiness4ZoneSuperce_29,
                popuplayertitle: 'B4Z - Business 4 Zone (Superce',
                interactive: false,
                title: '<img src="styles/legend/B4ZBusiness4ZoneSuperce_29.png" /> B4Z - Business 4 Zone (Superce'
            });
var format_B2ZBusiness2ZoneSuperce_30 = new ol.format.GeoJSON();
var features_B2ZBusiness2ZoneSuperce_30 = format_B2ZBusiness2ZoneSuperce_30.readFeatures(json_B2ZBusiness2ZoneSuperce_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B2ZBusiness2ZoneSuperce_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B2ZBusiness2ZoneSuperce_30.addFeatures(features_B2ZBusiness2ZoneSuperce_30);
var lyr_B2ZBusiness2ZoneSuperce_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B2ZBusiness2ZoneSuperce_30, 
                style: style_B2ZBusiness2ZoneSuperce_30,
                popuplayertitle: 'B2Z - Business 2 Zone (Superce',
                interactive: false,
                title: '<img src="styles/legend/B2ZBusiness2ZoneSuperce_30.png" /> B2Z - Business 2 Zone (Superce'
            });
var format_B1ZBusiness1ZoneSuperce_31 = new ol.format.GeoJSON();
var features_B1ZBusiness1ZoneSuperce_31 = format_B1ZBusiness1ZoneSuperce_31.readFeatures(json_B1ZBusiness1ZoneSuperce_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B1ZBusiness1ZoneSuperce_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B1ZBusiness1ZoneSuperce_31.addFeatures(features_B1ZBusiness1ZoneSuperce_31);
var lyr_B1ZBusiness1ZoneSuperce_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B1ZBusiness1ZoneSuperce_31, 
                style: style_B1ZBusiness1ZoneSuperce_31,
                popuplayertitle: 'B1Z - Business 1 Zone (Superce',
                interactive: false,
                title: '<img src="styles/legend/B1ZBusiness1ZoneSuperce_31.png" /> B1Z - Business 1 Zone (Superce'
            });
var lyr_FrankstonPSPBoundary_32 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Frankston PSP Boundary',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/FrankstonPSPBoundary_32.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16154469.455879, -4600385.721033, 16156499.923771, -4597590.698737]
                            })
                        });
var lyr_Precinct1_33 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Precinct 1',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Precinct1_33.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16154742.500095, -4599982.067580, 16155571.394120, -4598932.887064]
                            })
                        });
var lyr_Precinct2_34 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Precinct 2',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Precinct2_34.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16154980.458053, -4600138.084178, 16155494.830006, -4599749.816513]
                            })
                        });
var lyr_Precinct3_35 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Precinct 3',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Precinct3_35.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16154523.641976, -4600536.923975, 16155365.253575, -4599765.866931]
                            })
                        });
var lyr_Precinct4_36 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Precinct 4',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Precinct4_36.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16154402.750881, -4600070.345162, 16154974.921734, -4599187.408745]
                            })
                        });
var lyr_Precinct5_37 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Precinct 5',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Precinct5_37.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16154815.919649, -4599270.123645, 16155500.608667, -4597589.849150]
                            })
                        });
var lyr_PSPPrecinctsPlan_38 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PSP Precincts Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PSPPrecinctsPlan_38.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16154393.488033, -4600540.499380, 16155598.866095, -4597581.774111]
                            })
                        });
var format_Suburb_39 = new ol.format.GeoJSON();
var features_Suburb_39 = format_Suburb_39.readFeatures(json_Suburb_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_39.addFeatures(features_Suburb_39);
var lyr_Suburb_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_39, 
                style: style_Suburb_39,
                popuplayertitle: 'Suburb',
                interactive: false,
                title: '<img src="styles/legend/Suburb_39.png" /> Suburb'
            });
var format_FrankstonLGA_40 = new ol.format.GeoJSON();
var features_FrankstonLGA_40 = format_FrankstonLGA_40.readFeatures(json_FrankstonLGA_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrankstonLGA_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrankstonLGA_40.addFeatures(features_FrankstonLGA_40);
var lyr_FrankstonLGA_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrankstonLGA_40, 
                style: style_FrankstonLGA_40,
                popuplayertitle: 'Frankston LGA',
                interactive: false,
                title: '<img src="styles/legend/FrankstonLGA_40.png" /> Frankston LGA'
            });
var format_ParcelAttributes_41 = new ol.format.GeoJSON();
var features_ParcelAttributes_41 = format_ParcelAttributes_41.readFeatures(json_ParcelAttributes_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributes_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributes_41.addFeatures(features_ParcelAttributes_41);
var lyr_ParcelAttributes_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributes_41,
maxResolution:3.3605359382714357,
 minResolution:0.14002233076130982,

                style: style_ParcelAttributes_41,
                popuplayertitle: 'Parcel Attributes',
                interactive: true,
                title: '<img src="styles/legend/ParcelAttributes_41.png" /> Parcel Attributes'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_39,lyr_FrankstonLGA_40,lyr_ParcelAttributes_41,],
                                fold: "open",
                                title: 'Administrative'});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_FrankstonPSPBoundary_32,lyr_Precinct1_33,lyr_Precinct2_34,lyr_Precinct3_35,lyr_Precinct4_36,lyr_Precinct5_37,lyr_PSPPrecinctsPlan_38,],
                                fold: "open",
                                title: 'PSP'});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_UFZUrbanFloodwayZone_2,lyr_TRZ3TransportZone3Signif_3,lyr_TRZ2TransportZone2Princi_4,lyr_TRZ1TransportZone1State_5,lyr_SUZSpecialUseZone_6,lyr_RGZResidentialGrowthZone_7,lyr_RCZRuralConservationZone_8,lyr_R1ZResidential1Zonesupe_9,lyr_PUZ7PublicUseZoneOtherP_10,lyr_PUZ6PublicUseZoneLocalG_11,lyr_PUZ5PublicUseZoneCemeter_12,lyr_PUZ3PublicUseZoneHealth_13,lyr_PUZ2PublicUseZoneEducati_14,lyr_PUZ1PublicUseZoneService_15,lyr_PPRZPublicParkandRecreat_16,lyr_PCRZPublicConservationand_17,lyr_NRZNeighbourhoodResidentia_18,lyr_MUZMixedUseZone_19,lyr_LDRZLowDensityResidential_20,lyr_IN1ZIndustrial1Zone_21,lyr_GWZGreenWedgeZone_22,lyr_GRZGeneralResidentialZone_23,lyr_FZFarmingZone_24,lyr_CDZComprehensiveDevelopmen_25,lyr_C2ZCommercial2Zone_26,lyr_C1ZCommercial1Zone_27,lyr_B5ZBusiness5ZoneSuperce_28,lyr_B4ZBusiness4ZoneSuperce_29,lyr_B2ZBusiness2ZoneSuperce_30,lyr_B1ZBusiness1ZoneSuperce_31,],
                                fold: "open",
                                title: 'Zoning'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_UFZUrbanFloodwayZone_2.setVisible(false);lyr_TRZ3TransportZone3Signif_3.setVisible(false);lyr_TRZ2TransportZone2Princi_4.setVisible(false);lyr_TRZ1TransportZone1State_5.setVisible(false);lyr_SUZSpecialUseZone_6.setVisible(false);lyr_RGZResidentialGrowthZone_7.setVisible(false);lyr_RCZRuralConservationZone_8.setVisible(false);lyr_R1ZResidential1Zonesupe_9.setVisible(false);lyr_PUZ7PublicUseZoneOtherP_10.setVisible(false);lyr_PUZ6PublicUseZoneLocalG_11.setVisible(false);lyr_PUZ5PublicUseZoneCemeter_12.setVisible(false);lyr_PUZ3PublicUseZoneHealth_13.setVisible(false);lyr_PUZ2PublicUseZoneEducati_14.setVisible(false);lyr_PUZ1PublicUseZoneService_15.setVisible(false);lyr_PPRZPublicParkandRecreat_16.setVisible(false);lyr_PCRZPublicConservationand_17.setVisible(false);lyr_NRZNeighbourhoodResidentia_18.setVisible(false);lyr_MUZMixedUseZone_19.setVisible(false);lyr_LDRZLowDensityResidential_20.setVisible(false);lyr_IN1ZIndustrial1Zone_21.setVisible(false);lyr_GWZGreenWedgeZone_22.setVisible(false);lyr_GRZGeneralResidentialZone_23.setVisible(false);lyr_FZFarmingZone_24.setVisible(false);lyr_CDZComprehensiveDevelopmen_25.setVisible(false);lyr_C2ZCommercial2Zone_26.setVisible(false);lyr_C1ZCommercial1Zone_27.setVisible(false);lyr_B5ZBusiness5ZoneSuperce_28.setVisible(false);lyr_B4ZBusiness4ZoneSuperce_29.setVisible(false);lyr_B2ZBusiness2ZoneSuperce_30.setVisible(false);lyr_B1ZBusiness1ZoneSuperce_31.setVisible(false);lyr_FrankstonPSPBoundary_32.setVisible(true);lyr_Precinct1_33.setVisible(false);lyr_Precinct2_34.setVisible(false);lyr_Precinct3_35.setVisible(false);lyr_Precinct4_36.setVisible(false);lyr_Precinct5_37.setVisible(false);lyr_PSPPrecinctsPlan_38.setVisible(false);lyr_Suburb_39.setVisible(true);lyr_FrankstonLGA_40.setVisible(true);lyr_ParcelAttributes_41.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_PSP,group_Administrative];
lyr_UFZUrbanFloodwayZone_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TRZ3TransportZone3Signif_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TRZ2TransportZone2Princi_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TRZ1TransportZone1State_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SUZSpecialUseZone_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RGZResidentialGrowthZone_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RCZRuralConservationZone_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_R1ZResidential1Zonesupe_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PUZ7PublicUseZoneOtherP_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PUZ6PublicUseZoneLocalG_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PUZ5PublicUseZoneCemeter_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PUZ3PublicUseZoneHealth_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PUZ2PublicUseZoneEducati_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PUZ1PublicUseZoneService_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PPRZPublicParkandRecreat_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PCRZPublicConservationand_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_NRZNeighbourhoodResidentia_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MUZMixedUseZone_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LDRZLowDensityResidential_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_IN1ZIndustrial1Zone_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GWZGreenWedgeZone_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_GRZGeneralResidentialZone_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FZFarmingZone_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CDZComprehensiveDevelopmen_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_C2ZCommercial2Zone_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_C1ZCommercial1Zone_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_B5ZBusiness5ZoneSuperce_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_B4ZBusiness4ZoneSuperce_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_B2ZBusiness2ZoneSuperce_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_B1ZBusiness1ZoneSuperce_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Suburb_39.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_FrankstonLGA_40.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UFI': 'UFI', 'PFI': 'PFI', 'LGA_CODE': 'LGA_CODE', 'LGA_NAME': 'LGA_NAME', 'LGA_OFFICIAL_NAME': 'LGA_OFFICIAL_NAME', 'GAZETTAL_REGISTRATION': 'GAZETTAL_REGISTRATION', 'ABS_LGA_CODE': 'ABS_LGA_CODE', 'TASK_ID': 'TASK_ID', 'PFI_CREATED': 'PFI_CREATED', 'UFI_OLD': 'UFI_OLD', 'UFI_CREATED': 'UFI_CREATED', 'LABEL_USE_CODE': 'LABEL_USE_CODE', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_ParcelAttributes_41.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Address': 'Address', 'Suburb': 'Suburb', 'Gross HA': 'Gross HA', 'Current Zoning': 'Current Zoning', });
lyr_UFZUrbanFloodwayZone_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRZ3TransportZone3Signif_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRZ2TransportZone2Princi_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRZ1TransportZone1State_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SUZSpecialUseZone_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RGZResidentialGrowthZone_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RCZRuralConservationZone_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_R1ZResidential1Zonesupe_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ7PublicUseZoneOtherP_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ6PublicUseZoneLocalG_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ5PublicUseZoneCemeter_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ3PublicUseZoneHealth_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ2PublicUseZoneEducati_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ1PublicUseZoneService_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PPRZPublicParkandRecreat_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PCRZPublicConservationand_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NRZNeighbourhoodResidentia_18.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MUZMixedUseZone_19.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LDRZLowDensityResidential_20.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IN1ZIndustrial1Zone_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GWZGreenWedgeZone_22.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GRZGeneralResidentialZone_23.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FZFarmingZone_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CDZComprehensiveDevelopmen_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_C2ZCommercial2Zone_26.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_C1ZCommercial1Zone_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_B5ZBusiness5ZoneSuperce_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_B4ZBusiness4ZoneSuperce_29.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_B2ZBusiness2ZoneSuperce_30.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_B1ZBusiness1ZoneSuperce_31.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'CODE_PARENT': 'TextEdit', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'VDPID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Suburb_39.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_FrankstonLGA_40.set('fieldImages', {'OBJECTID': 'TextEdit', 'UFI': 'TextEdit', 'PFI': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA_NAME': 'TextEdit', 'LGA_OFFICIAL_NAME': 'TextEdit', 'GAZETTAL_REGISTRATION': 'TextEdit', 'ABS_LGA_CODE': 'TextEdit', 'TASK_ID': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI_OLD': 'TextEdit', 'UFI_CREATED': 'DateTime', 'LABEL_USE_CODE': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ParcelAttributes_41.set('fieldImages', {'fid': 'TextEdit', 'Unique ID': 'TextEdit', 'Address': 'TextEdit', 'Suburb': 'TextEdit', 'Gross HA': 'TextEdit', 'Current Zoning': 'TextEdit', });
lyr_UFZUrbanFloodwayZone_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TRZ3TransportZone3Signif_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TRZ2TransportZone2Princi_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TRZ1TransportZone1State_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SUZSpecialUseZone_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RGZResidentialGrowthZone_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RCZRuralConservationZone_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_R1ZResidential1Zonesupe_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ7PublicUseZoneOtherP_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ6PublicUseZoneLocalG_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ5PublicUseZoneCemeter_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ3PublicUseZoneHealth_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ2PublicUseZoneEducati_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ1PublicUseZoneService_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PPRZPublicParkandRecreat_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PCRZPublicConservationand_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_NRZNeighbourhoodResidentia_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_MUZMixedUseZone_19.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LDRZLowDensityResidential_20.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_IN1ZIndustrial1Zone_21.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GWZGreenWedgeZone_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GRZGeneralResidentialZone_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FZFarmingZone_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_CDZComprehensiveDevelopmen_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_C2ZCommercial2Zone_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_C1ZCommercial1Zone_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_B5ZBusiness5ZoneSuperce_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_B4ZBusiness4ZoneSuperce_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_B2ZBusiness2ZoneSuperce_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_B1ZBusiness1ZoneSuperce_31.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Suburb_39.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_FrankstonLGA_40.set('fieldLabels', {'OBJECTID': 'hidden field', 'UFI': 'hidden field', 'PFI': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA_NAME': 'hidden field', 'LGA_OFFICIAL_NAME': 'hidden field', 'GAZETTAL_REGISTRATION': 'hidden field', 'ABS_LGA_CODE': 'hidden field', 'TASK_ID': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI_OLD': 'hidden field', 'UFI_CREATED': 'hidden field', 'LABEL_USE_CODE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ParcelAttributes_41.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Address': 'inline label - visible with data', 'Suburb': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'Current Zoning': 'inline label - visible with data', });
lyr_ParcelAttributes_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});