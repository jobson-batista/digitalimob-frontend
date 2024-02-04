import { Component, Input, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM, Vector } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import * as olProj from 'ol/proj';
import VectorLayer from 'ol/layer/Vector.js';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import * as control from 'ol/control';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  @Input()
  lon: number = -34.861;

  @Input()
  lat: number = -7.11532;

  iconLabel: HTMLDivElement = document.createElement('div');
  
  constructor() {
    this.iconLabel.innerHTML = '<img height="18" style="display: flex; align-items: center; margin: auto; opacity: 0.6;" src="../../../assets/center.png">';
  }

  public map!: Map;

  ngOnInit(): void {
    try {
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM()
          }),
        ],
        target: 'map',
        view: new View({
          center: olProj.transform([this.lon, this.lat], 'EPSG:4326', 'EPSG:3857'),
          zoom: 16,
          maxZoom: 20,
          resolution: 2
        })
      });

      let vectorLayer = new VectorLayer({
        source: new Vector()
      });
      this.map.addLayer(vectorLayer);
      let marker = new Feature({
        geometry: new Point(olProj.fromLonLat([this.lon, this.lat]))
      });
      let iconStyle = new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: '../../../assets/marker.png',
          scale: 0.3
        })
      });
      marker.setStyle(iconStyle);
      vectorLayer.getSource()?.addFeature(marker);

      let grau = 0.0026;
      /* Adicionar controle para Centralizar o mapa ao marcador */
      let centerControl = new control.ZoomToExtent({
        extent: olProj.transformExtent([this.lon - grau, this.lat - grau, this.lon + grau, this.lat + grau], 'EPSG:4326', 'EPSG:3857'), 
        label: this.iconLabel,
        tipLabel: 'Centralizar Mapa'
      });
      this.map.addControl(centerControl);
    } catch (error) {
      console.log(error);
    }
  }

}
