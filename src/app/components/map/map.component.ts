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
          center: olProj.transform([-34.861, -7.11532], 'EPSG:4326', 'EPSG:3857'),
          zoom: 16,
          maxZoom: 20
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
    } catch (error) {
      console.log(error);
    }
  }

}
