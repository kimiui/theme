import type { MapProps } from 'react-map-gl';
import { Layer, Source } from 'react-map-gl';
import { useMemo, useState, useEffect } from 'react';

import { MapWrapper } from 'src/components/map';

import { heatmapLayer } from './map-style';
import { ControlPanel } from './control-panel';

// ----------------------------------------------------------------------

export function MapHeatmap({ ...other }: MapProps) {
  const [allDays, useAllDays] = useState(true);

  const [timeRange, setTimeRange] = useState([0, 0]);

  const [selectedTime, selectTime] = useState(0);

  const [earthquakes, setEarthQuakes] = useState();

  useEffect(() => {
    fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
      .then((resp) => resp.json())
      .then((json) => {
        const { features } = json;

        const endTime = features[0].properties.time;

        const startTime = features[features.length - 1].properties.time;

        setTimeRange([startTime, endTime]);

        setEarthQuakes(json);

        selectTime(endTime);
      })
      .catch((error) => console.error('Could not load data', error));
  }, []);

  const data: any = useMemo(
    () => (allDays ? earthquakes : filterFeaturesByDay(earthquakes, selectedTime)),
    [earthquakes, allDays, selectedTime]
  );

  return (
    <>
      <MapWrapper initialViewState={{ latitude: 40, longitude: -100, zoom: 3 }} {...other}>
        {data && (
          <Source type="geojson" data={data}>
            <Layer {...heatmapLayer} />
          </Source>
        )}
      </MapWrapper>

      <ControlPanel
        startTime={timeRange[0]}
        endTime={timeRange[1]}
        selectedTime={selectedTime}
        allDays={allDays}
        onChangeTime={selectTime}
        onChangeAllDays={useAllDays}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function filterFeaturesByDay(
  featureCollection:
    | {
        features: any[];
      }
    | undefined,
  time: number
) {
  const date = new Date(time);

  const year = date.getFullYear();

  const month = date.getMonth();

  const day = date.getDate();

  const features = featureCollection?.features.filter((feature) => {
    const featureDate = new Date(feature.properties?.time);

    return (
      featureDate.getFullYear() === year &&
      featureDate.getMonth() === month &&
      featureDate.getDate() === day
    );
  });
  return { type: 'FeatureCollection', features };
}
