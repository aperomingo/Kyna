'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, X } from 'lucide-react';
import { sendEmailAction } from '@/app/actions';
import { cn } from '@/lib/utils';

// Base price with default options
const BASE_PRICE = 0;

// Absolute cost additions from the base
const WOOD_PRICES: Record<string, number> = {
  abeto: 45,
  pino: 60,
};

const SUB_WOOD_PRICES: Record<string, number> = {
  abeto_50: 0,
  abeto_70: 25,
  abeto_100: 55,
  pino_50: 0,
  pino_70: 15,
  pino_100: 50,
};

const WOOD_LABELS: Record<string, string> = {
  abeto: 'Abeto',
  pino: 'Pino',
};

const SUB_WOOD_LABELS: Record<string, string> = {
  abeto_50: '50cm',
  abeto_70: '70cm',
  abeto_100: '100cm',
  pino_50: '50cm',
  pino_70: '70cm',
  pino_100: '100cm',
};

const LIGHTING_PRICES: Record<string, number> = {
  halogenos: 35,
  leds: 15,
};

const SUSPENSION_PRICES: Record<string, number> = {
  cuerdas: 0,
  cadenas: 15,
};

const SUB_LIGHTING_PRICES: Record<string, number> = {
  calidos: 0,
  blancos: 0,
  neutros: 0,
  regulable: 5,
};

const LIGHTING_LABELS: Record<string, string> = {
  halogenos: 'Halógenos',
  leds: 'LEDs',
};

const SUSPENSION_LABELS: Record<string, string> = {
  cuerdas: 'Cuerdas',
  cadenas: 'Cadenas',
};

const SUB_LIGHTING_LABELS: Record<string, string> = {
  calidos: 'Cálidos',
  blancos: 'Blancos',
  neutros: 'Neutros',
  regulable: 'Regulable',
};

const DIMMER_PRICES: Record<string, number> = {
  wifi_on_off: 80,
  mando: 120,
  wifi: 160,
};

const DIMMER_LABELS: Record<string, string> = {
  wifi_on_off: 'Wifi on/off',
  mando: 'Mando',
  wifi: 'Wifi',
};

const LED_UPPER_PRICES: Record<string, number> = {
  no: 0,
  si: 40,
};

const LED_UPPER_LABELS: Record<string, string> = {
  no: 'No',
  si: 'Sí',
};

const LED_DESIGN_PRICES: Record<string, Record<string, number>> = {
  dos_lineas: {
    '50': 52,
    '70': 60,
    '100': 69,
  },
  tres_lineas: {
    '50': 78,
    '70': 90,
    '100': 104,
  },
  rectangulo: {
    '50': 72,
    '70': 83,
    '100': 95,
  },
  en_l: {
    '50': 68,
    '70': 79,
    '100': 91,
  },
};

const LED_DESIGN_LABELS: Record<string, string> = {
  dos_lineas: '2 líneas paralelas',
  tres_lineas: '3 líneas paralelas',
  rectangulo: 'En rectángulo',
  en_l: 'En "L"',
};

const SUB_SUSPENSION_LABELS: Record<string, string> = {
  acero: 'de Acero',
  negras: 'Negras',
};

const SUB_SUSPENSION_PRICES: Record<string, Record<string, number>> = {
  acero: {
    '50': 10,
    '70': 12,
    '100': 16,
  },
  negras: {
    '50': 12,
    '70': 16,
    '100': 20,
  },
};

const CUERDAS_PRICES: Record<string, number> = {
  '50': 16,
  '70': 20,
  '100': 24,
};

const BARNIZ_PRICES: Record<string, number> = {
  '50': 25,
  '70': 30,
  '100': 35,
};

const BARNIZ_LABELS: Record<string, string> = {
  no: 'No',
  si: 'Sí',
};

function PriceDelta({ delta }: { delta: number }) {
  return (
    <span
      className={`ml-2 text-xs font-semibold ${delta > 0 ? 'text-accent' : delta < 0 ? 'text-green-400' : 'text-muted-foreground/60'}`}
    >
      {delta > 0 ? `+${delta}€` : delta < 0 ? `${delta}€` : '+0€'}
    </span>
  );
}

interface OptionGroupProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  labels: Record<string, string>;
  deltas: Record<string, number>;
  disabled?: boolean;
}

function OptionGroup({
  label,
  options,
  value,
  onChange,
  labels,
  deltas,
  disabled = false,
}: OptionGroupProps) {
  return (
    <div className={`space-y-2 transition-all duration-300 ${disabled ? 'opacity-40 pointer-events-none' : ''}`}>
      <label className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground block">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = value === option;
          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              disabled={disabled}
              className={`
                relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border-2
                ${
                  isSelected
                    ? 'border-accent bg-accent/15 text-accent shadow-lg shadow-accent/10'
                    : 'border-foreground/15 text-foreground/70 hover:border-foreground/30 hover:text-foreground'
                }
              `}
            >
              <span>{labels[option]}</span>
              <PriceDelta delta={isSelected ? 0 : deltas[option]} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function LampConfigurator() {
  const [wood, setWood] = useState('');
  const [woodSub, setWoodSub] = useState('');
  const [lighting, setLighting] = useState('');
  const [lightingSub, setLightingSub] = useState('');
  const [lightingDesign, setLightingDesign] = useState('dos_lineas');
  const [lightingLedUpper, setLightingLedUpper] = useState('');
  const [lightingDimmer, setLightingDimmer] = useState('');
  const [suspension, setSuspension] = useState('');
  const [suspensionSub, setSuspensionSub] = useState('');
  const [varnish, setVarnish] = useState('');
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formStatus, setFormStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [formMessage, setFormMessage] = useState('');

  const getPriceForConfig = (
    w: string,
    wSub: string,
    l: string,
    lSub: string,
    lDesign: string,
    s: string,
    sSub: string,
    v: string,
    lLedUpper: string,
    lDimmer: string,
  ) => {
    const lengthSuffix = wSub.split('_')[1] || '50';
    const woodPrice = w ? (WOOD_PRICES[w] || 0) : 0;
    const woodSubPrice = wSub ? (SUB_WOOD_PRICES[wSub] || 0) : 0;
    const lightingPrice = l ? (LIGHTING_PRICES[l] || 0) : 0;
    const lightingSubPrice = lSub ? (SUB_LIGHTING_PRICES[lSub] || 0) : 0;
    const ledDesignPrice = (l === 'leds' && lDesign) ? (LED_DESIGN_PRICES[lDesign]?.[lengthSuffix] || 0) : 0;
    const ledUpperPrice = (l === 'leds' && lLedUpper === 'si') ? 40 : 0;
    const dimmerPrice = (l === 'leds' && lSub === 'regulable' && lDimmer) ? (DIMMER_PRICES[lDimmer] || 0) : 0;
    const suspensionPrice = s ? (SUSPENSION_PRICES[s] || 0) : 0;
    let suspensionSubPrice = 0;
    if (s === 'cadenas' && sSub) {
      suspensionSubPrice = SUB_SUSPENSION_PRICES[sSub]?.[lengthSuffix] || 0;
    } else if (s === 'cuerdas') {
      suspensionSubPrice = CUERDAS_PRICES[lengthSuffix] || 0;
    }
    const varnishPrice = (v === 'si') ? (BARNIZ_PRICES[lengthSuffix] || 0) : 0;

    return (
      BASE_PRICE +
      woodPrice +
      woodSubPrice +
      lightingPrice +
      lightingSubPrice +
      ledDesignPrice +
      ledUpperPrice +
      dimmerPrice +
      suspensionPrice +
      suspensionSubPrice +
      varnishPrice
    );
  };

  const totalPrice = getPriceForConfig(
    wood,
    woodSub,
    lighting,
    lightingSub,
    lightingDesign,
    suspension,
    suspensionSub,
    varnish,
    lightingLedUpper,
    lightingDimmer,
  );

  const configSummary = `Tablón: ${wood ? `${WOOD_LABELS[wood]} (${SUB_WOOD_LABELS[woodSub]})` : 'No seleccionado'} | Iluminación: ${lighting ? `${LIGHTING_LABELS[lighting]} (${SUB_LIGHTING_LABELS[lightingSub]}${lighting === 'leds' ? ` - ${LED_DESIGN_LABELS[lightingDesign]}` : ''})` : 'No seleccionada'} | Sujeción: ${suspension ? `${SUSPENSION_LABELS[suspension]}${suspension === 'cadenas' ? ` (${SUB_SUSPENSION_LABELS[suspensionSub]})` : ''}` : 'No seleccionada'} | Barniz: ${varnish ? BARNIZ_LABELS[varnish] : 'No seleccionado'} | Total: ${totalPrice}€`;

  const woodDeltas = {
    abeto:
      getPriceForConfig(
        'abeto',
        'abeto_50',
        lighting,
        lightingSub,
        lightingDesign,
        suspension,
        suspensionSub,
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
    pino:
      getPriceForConfig(
        'pino',
        'pino_50',
        lighting,
        lightingSub,
        lightingDesign,
        suspension,
        suspensionSub,
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
  };

  const woodSubDeltas: Record<string, number> = {
    abeto_50: getPriceForConfig('abeto', 'abeto_50', lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    abeto_70: getPriceForConfig('abeto', 'abeto_70', lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    abeto_100: getPriceForConfig('abeto', 'abeto_100', lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    pino_50: getPriceForConfig('pino', 'pino_50', lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    pino_70: getPriceForConfig('pino', 'pino_70', lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    pino_100: getPriceForConfig('pino', 'pino_100', lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
  };

  const lightingDeltas = {
    halogenos:
      getPriceForConfig(
        wood,
        woodSub,
        'halogenos',
        'calidos',
        '',
        suspension,
        suspensionSub,
        varnish,
        '',
        '',
      ) - totalPrice,
    leds:
      getPriceForConfig(
        wood,
        woodSub,
        'leds',
        'calidos',
        'dos_lineas',
        suspension,
        suspensionSub,
        varnish,
        'no',
        '',
      ) - totalPrice,
  };

  const lightingSubDeltas: Record<string, number> = {
    calidos: getPriceForConfig(wood, woodSub, lighting, 'calidos', lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    blancos: getPriceForConfig(wood, woodSub, lighting, 'blancos', lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    neutros: getPriceForConfig(wood, woodSub, lighting, 'neutros', lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, lightingDimmer) - totalPrice,
    regulable: getPriceForConfig(wood, woodSub, lighting, 'regulable', lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, '') - totalPrice,
  };

  const ledDesignDeltas: Record<string, number> = {
    dos_lineas:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        'dos_lineas',
        suspension,
        suspensionSub,
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
    tres_lineas:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        'tres_lineas',
        suspension,
        suspensionSub,
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
    rectangulo:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        'rectangulo',
        suspension,
        suspensionSub,
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
    en_l:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        'en_l',
        suspension,
        suspensionSub,
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
  };

  const ledUpperDeltas = {
    no: getPriceForConfig(wood, woodSub, lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, 'no', lightingDimmer) - totalPrice,
    si: getPriceForConfig(wood, woodSub, lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, 'si', lightingDimmer) - totalPrice,
  };

  const dimmerDeltas: Record<string, number> = {
    wifi_on_off: getPriceForConfig(wood, woodSub, lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, 'wifi_on_off') - totalPrice,
    mando: getPriceForConfig(wood, woodSub, lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, 'mando') - totalPrice,
    wifi: getPriceForConfig(wood, woodSub, lighting, lightingSub, lightingDesign, suspension, suspensionSub, varnish, lightingLedUpper, 'wifi') - totalPrice,
  };

  const suspensionDeltas = {
    cuerdas:
      getPriceForConfig(wood, woodSub, lighting, lightingSub, lightingDesign, 'cuerdas', '', varnish, lightingLedUpper, lightingDimmer) -
      totalPrice,
    cadenas:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        lightingDesign,
        'cadenas',
        'acero',
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
  };

  const suspensionSubDeltas: Record<string, number> = {
    acero:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        lightingDesign,
        suspension,
        'acero',
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
    negras:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        lightingDesign,
        suspension,
        'negras',
        varnish,
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
  };

  const varnishDeltas = {
    no:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        lightingDesign,
        suspension,
        suspensionSub,
        'no',
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
    si:
      getPriceForConfig(
        wood,
        woodSub,
        lighting,
        lightingSub,
        lightingDesign,
        suspension,
        suspensionSub,
        'si',
        lightingLedUpper,
        lightingDimmer,
      ) - totalPrice,
  };

  const handleWoodChange = (val: string) => {
    setWood(val);
    setWoodSub('');
  };

  const handleLightingChange = (val: string) => {
    setLighting(val);
    setLightingSub('');
    setLightingLedUpper('');
    setLightingDimmer('');
    if (val === 'leds') {
      setLightingDesign('dos_lineas');
    } else {
      setLightingDesign('');
    }
  };

  const handleSuspensionChange = (val: string) => {
    setSuspension(val);
    if (val === 'cadenas') {
      setSuspensionSub('acero');
    } else {
      setSuspensionSub('');
    }
  };

  function openModal() {
    setShowModal(true);
    setFormStatus('idle');
    setFormMessage('');
  }

  const handleRequestSubmit = () => {
    if (!isConfigComplete) {
      setShowValidationErrors(true);
      return;
    }
    setShowValidationErrors(false);
    openModal();
  };

  function closeModal() {
    setShowModal(false);
  }

  async function handleModalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('division', 'lámpara');
    // Append lamp configuration to the message
    const userMessage = (formData.get('message') as string) || '';
    const ledUpperSummary = (lighting === 'leds' && lightingLedUpper === 'si') ? ` | Led superior: Sí` : '';
    const dimmerSummary = (lighting === 'leds' && lightingSub === 'regulable' && lightingDimmer) ? ` | Controlador: ${DIMMER_LABELS[lightingDimmer]}` : '';
    const varnishSummary = (varnish === 'si') ? `\nBarniz: Sí` : '';
    const fullMessage = `${userMessage}\n\n--- Configuración de lámpara ---\nTablón: ${WOOD_LABELS[wood]} (${SUB_WOOD_LABELS[woodSub]})\nIluminación: ${lighting ? `${LIGHTING_LABELS[lighting]} (${SUB_LIGHTING_LABELS[lightingSub]}${lighting === 'leds' ? ` - ${LED_DESIGN_LABELS[lightingDesign]}` : ''})${ledUpperSummary}${dimmerSummary}` : 'No seleccionada'}\nSujeción: ${SUSPENSION_LABELS[suspension]}${suspension === 'cadenas' ? ` (${SUB_SUSPENSION_LABELS[suspensionSub]})` : ''}${varnishSummary}\nPrecio total: ${totalPrice}€`;
    formData.set('message', fullMessage);
    setFormStatus('loading');
    try {
      const result = await sendEmailAction(formData);
      if (result.success) {
        setFormStatus('success');
        setFormMessage(
          '¡Solicitud enviada! Nos pondremos en contacto contigo muy pronto.',
        );
      } else {
        setFormStatus('error');
        setFormMessage('Hubo un error al enviar. Inténtalo de nuevo.');
      }
    } catch {
      setFormStatus('error');
      setFormMessage('Algo salió mal. Por favor, inténtalo más tarde.');
    }
  }

  const woodPriceSum = (wood ? WOOD_PRICES[wood] || 0 : 0) + (woodSub ? SUB_WOOD_PRICES[woodSub] || 0 : 0);
  const lengthSuffix = woodSub ? (woodSub.split('_')[1] || '50') : '50';
  const ledDesignPrice = (lighting === 'leds' && lightingDesign) ? (LED_DESIGN_PRICES[lightingDesign]?.[lengthSuffix] || 0) : 0;
  const ledUpperPrice = (lighting === 'leds' && lightingLedUpper === 'si') ? 40 : 0;
  const dimmerPrice = (lighting === 'leds' && lightingSub === 'regulable' && lightingDimmer) ? (DIMMER_PRICES[lightingDimmer] || 0) : 0;
  const lightingPriceSum = (lighting ? LIGHTING_PRICES[lighting] || 0 : 0) + (lightingSub ? SUB_LIGHTING_PRICES[lightingSub] || 0 : 0) + (lighting === 'leds' ? ledDesignPrice + ledUpperPrice + dimmerPrice : 0);
  
  let suspensionSubPrice = 0;
  if (suspension === 'cadenas' && suspensionSub) {
    suspensionSubPrice = SUB_SUSPENSION_PRICES[suspensionSub]?.[lengthSuffix] || 0;
  } else if (suspension === 'cuerdas') {
    suspensionSubPrice = CUERDAS_PRICES[lengthSuffix] || 0;
  }
  const suspensionPriceSum = (suspension ? SUSPENSION_PRICES[suspension] || 0 : 0) + suspensionSubPrice;
  const varnishPriceSum = (varnish === 'si') ? (BARNIZ_PRICES[lengthSuffix] || 0) : 0;
  
  const isConfigComplete = !!(
    wood &&
    woodSub &&
    lighting &&
    (lighting === 'halogenos'
      ? lightingSub
      : (lightingSub && lightingDesign && (lightingSub !== 'regulable' || lightingDimmer))
    ) &&
    suspension &&
    (suspension === 'cadenas' ? suspensionSub : true)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Product Image */}
      <div className="relative aspect-square rounded-[2rem] overflow-hidden glass shadow-2xl group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
        <NextImage
          src={
            lighting === 'halogenos'
              ? '/images/lamparas/lampara-personalizada-ale.jpg'
              : '/images/iluminacion/productos/lamparas-personalizadas-v6.png'
          }
          alt="Lámpara personalizada Kyna"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Floating Price Badge */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 bg-background/85 backdrop-blur-md border border-accent/30 px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-xl">
          <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.15em] text-accent block">
            Desde
          </span>
          <span className="text-xl md:text-3xl font-display font-bold text-accent">
            96€
          </span>
        </div>
        {/* Example Image Label */}
        <div className="absolute top-4 right-4 z-20 bg-background/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 shadow-md">
          <span className="text-[9px] font-bold uppercase tracking-wider text-accent block mb-0.5">
            Imagen de ejemplo
          </span>
          <span className="text-[9px] text-muted-foreground block font-medium">
            {lighting === 'halogenos'
              ? 'Banano barnizado 100cm, halógenos neutros y cadenas de acero'
              : 'Banano barnizado 100cm, en "L", Regulable por mando y cadenas negras'}
          </span>
        </div>
      </div>

      {/* Configuration Panel */}
      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Configura tu <span className="text-accent">Lámpara</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Elige los materiales y acabados para crear una pieza única,
            artesanal y a medida.
          </p>
          <div className="text-xs text-muted-foreground/80 bg-accent/5 border border-accent/15 px-4 py-2.5 rounded-2xl flex items-center gap-2 max-w-lg mt-2">
            <span>💡</span>
            <span>El precio de toda la configuración puede variar según el tamaño del tablón y la longitud del mismo.</span>
          </div>
        </div>

        <div className="w-full h-px bg-foreground/10" />

        <div className="space-y-4">
          <OptionGroup
            label={wood ? `Tablón lijado macizo * (+${woodPriceSum}€)` : "Tablón lijado macizo *"}
            options={['abeto', 'pino']}
            value={wood}
            onChange={handleWoodChange}
            labels={WOOD_LABELS}
            deltas={woodDeltas}
          />

          {/* Sub-opciones de tablón (Longitud) */}
          {wood && (
            <div className="pl-4 border-l-2 border-accent/30 space-y-2 transition-all duration-300">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block">
                {wood === 'abeto'
                  ? 'Longitud * (Ancho entre 30cm y 40cm y grosor 3cm)'
                  : 'Longitud * (Ancho entre 30cm y 50cm y grosor 5cm)'}
                {woodSub && ` (+${SUB_WOOD_PRICES[woodSub] || 0}€)`}
              </span>
              <div className="flex flex-wrap gap-2">
                {(wood === 'abeto'
                  ? ['abeto_50', 'abeto_70', 'abeto_100']
                  : ['pino_50', 'pino_70', 'pino_100']
                ).map((subOpt) => {
                  const isSelected = woodSub === subOpt;
                  return (
                    <button
                      key={subOpt}
                      onClick={() => setWoodSub(subOpt)}
                      className={`
                        relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border-2
                        ${
                          isSelected
                            ? 'border-accent bg-accent/15 text-accent shadow-sm shadow-accent/5'
                            : 'border-foreground/10 text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                        }
                      `}
                    >
                      <span>{SUB_WOOD_LABELS[subOpt]}</span>
                      <PriceDelta
                        delta={isSelected ? 0 : woodSubDeltas[subOpt]}
                      />
                    </button>
                  );
                })}
              </div>
              {showValidationErrors && !woodSub && (
                <p className="text-xs text-red-400 font-semibold animate-pulse mt-1 flex items-center gap-1.5 pl-1">
                  <span>⚠️</span> Por favor, selecciona una longitud
                </p>
              )}
            </div>
          )}

          {showValidationErrors && !wood && (
            <p className="text-xs text-red-400 font-semibold animate-pulse mt-2 flex items-center gap-1.5 pl-1">
              <span>⚠️</span> Por favor, selecciona un tablón
            </p>
          )}
        </div>

        <div className="space-y-4">
          <OptionGroup
            label={lighting ? `Iluminación * (+${lightingPriceSum}€)` : "Iluminación *"}
            options={['halogenos', 'leds']}
            value={lighting}
            onChange={handleLightingChange}
            labels={LIGHTING_LABELS}
            deltas={lightingDeltas}
          />

          {/* Sub-opciones de iluminación */}
          {lighting && (
            <div className="space-y-4 animate-fade-in">
              {/* Grupo 2: Diseño del LED (sólo para LEDs, ahora primero) */}
              {lighting === 'leds' && (
                <div className="pl-4 border-l-2 border-accent/30 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block">
                    Diseño del LED *
                    {lightingDesign && ` (+${ledDesignPrice}€)`}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['dos_lineas', 'tres_lineas', 'rectangulo', 'en_l'].map((subOpt) => {
                      const isSelected = lightingDesign === subOpt;
                      return (
                        <button
                          key={subOpt}
                          onClick={() => setLightingDesign(subOpt)}
                          className={`
                            relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border-2
                            ${
                              isSelected
                                ? 'border-accent bg-accent/15 text-accent shadow-sm shadow-accent/5'
                                : 'border-foreground/10 text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                            }
                          `}
                        >
                          <span>{LED_DESIGN_LABELS[subOpt]}</span>
                          <PriceDelta
                            delta={isSelected ? 0 : ledDesignDeltas[subOpt]}
                          />
                        </button>
                      );
                    })}
                  </div>
                  {showValidationErrors && !lightingDesign && (
                    <p className="text-xs text-red-400 font-semibold animate-pulse mt-1 flex items-center gap-1.5 pl-1">
                      <span>⚠️</span> Por favor, selecciona el diseño del LED
                    </p>
                  )}
                </div>
              )}

              {/* Grupo 1: Tipo de luz (color) */}
              <div className="pl-4 border-l-2 border-accent/30 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block">
                  {lighting === 'halogenos' ? 'Tipo de halógenos *' : 'Tipo de LEDs (Color) *'}
                  {lightingSub && ` (+${SUB_LIGHTING_PRICES[lightingSub] || 0}€)`}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(lighting === 'leds'
                    ? ['regulable', 'calidos', 'blancos', 'neutros']
                    : ['calidos', 'blancos', 'neutros']
                  ).map((subOpt) => {
                    const isSelected = lightingSub === subOpt;
                    return (
                      <button
                        key={subOpt}
                        onClick={() => {
                          setLightingSub(subOpt);
                          if (subOpt !== 'regulable') {
                            setLightingDimmer('');
                          }
                        }}
                        className={`
                          relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border-2
                          ${
                            isSelected
                              ? 'border-accent bg-accent/15 text-accent shadow-sm shadow-accent/5'
                              : 'border-foreground/10 text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                          }
                        `}
                      >
                        <span>{SUB_LIGHTING_LABELS[subOpt]}</span>
                        <PriceDelta
                          delta={isSelected ? 0 : lightingSubDeltas[subOpt]}
                        />
                      </button>
                    );
                  })}
                </div>
                {showValidationErrors && !lightingSub && (
                  <p className="text-xs text-red-400 font-semibold animate-pulse mt-1 flex items-center gap-1.5 pl-1">
                    <span>⚠️</span> Por favor, selecciona el tipo de {lighting === 'halogenos' ? 'halógenos' : 'LEDs'}
                  </p>
                )}
              </div>

              {/* Grupo 1.5: Controlador Regulable (visible desactivado si no es regulable, activo y obligatorio si lo es) */}
              {lighting === 'leds' && (
                <div className={`pl-4 border-l-2 border-accent/30 space-y-2 animate-fade-in transition-all duration-300 ${lightingSub !== 'regulable' ? 'opacity-40 pointer-events-none' : ''}`}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block">
                    {lightingDimmer ? `Controlador Regulable por ${lightingSub === 'regulable' ? '*' : ''} (+${DIMMER_PRICES[lightingDimmer]}€)` : `Controlador Regulable por ${lightingSub === 'regulable' ? '*' : ''}`}
                    {lightingSub !== 'regulable' && (
                      <span className="text-[9px] text-muted-foreground font-normal normal-case block mt-0.5">
                        (Requiere tipo de LED "Regulable")
                      </span>
                    )}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['wifi_on_off', 'mando', 'wifi'].map((subOpt) => {
                      const isSelected = lightingDimmer === subOpt;
                      return (
                        <button
                          key={subOpt}
                          disabled={lightingSub !== 'regulable'}
                          onClick={() => setLightingDimmer(subOpt)}
                          className={`
                            relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border-2
                            ${
                              isSelected
                                ? 'border-accent bg-accent/15 text-accent shadow-sm shadow-accent/5'
                                : 'border-foreground/10 text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                            }
                          `}
                        >
                          <span>{DIMMER_LABELS[subOpt]}</span>
                          <PriceDelta
                            delta={isSelected ? 0 : dimmerDeltas[subOpt]}
                          />
                        </button>
                      );
                    })}
                  </div>
                  {showValidationErrors && lightingSub === 'regulable' && !lightingDimmer && (
                    <p className="text-xs text-red-400 font-semibold animate-pulse mt-1 flex items-center gap-1.5 pl-1">
                      <span>⚠️</span> Por favor, selecciona un controlador regulable
                    </p>
                  )}
                </div>
              )}

              {/* Grupo 3: Led superior (sólo para LEDs) */}
              {lighting === 'leds' && (
                <div className="pl-4 border-l-2 border-accent/30 space-y-2 animate-fade-in">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block">
                    {lightingLedUpper === 'si' ? 'Led superior (+40€)' : 'Led superior'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['no', 'si'].map((subOpt) => {
                      const isSelected = lightingLedUpper === subOpt;
                      return (
                        <button
                          key={subOpt}
                          onClick={() => setLightingLedUpper(subOpt)}
                          className={`
                            relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border-2
                            ${
                              isSelected
                                ? 'border-accent bg-accent/15 text-accent shadow-sm shadow-accent/5'
                                : 'border-foreground/10 text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                            }
                          `}
                        >
                          <span>{LED_UPPER_LABELS[subOpt]}</span>
                          <PriceDelta
                            delta={isSelected ? 0 : ledUpperDeltas[subOpt]}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {showValidationErrors && !lighting && (
            <p className="text-xs text-red-400 font-semibold animate-pulse mt-2 flex items-center gap-1.5 pl-1">
              <span>⚠️</span> Por favor, selecciona una iluminación
            </p>
          )}
        </div>

        <div className="space-y-4">
          <OptionGroup
            label={suspension ? `Sujeción * (incluye cazoleta y 1m de cable) (+${suspensionPriceSum}€)` : "Sujeción * (incluye cazoleta y 1m de cable)"}
            options={['cuerdas', 'cadenas']}
            value={suspension}
            onChange={handleSuspensionChange}
            labels={SUSPENSION_LABELS}
            deltas={suspensionDeltas}
          />

          {/* Sub-opciones de sujeción (sólo para cadenas) */}
          {suspension === 'cadenas' && (
            <div className="pl-4 border-l-2 border-accent/30 space-y-2 animate-fade-in transition-all duration-300">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block">
                Tipo de cadenas *
                {suspensionSub && ` (+${suspensionSubPrice || 0}€)`}
              </span>
              <div className="flex flex-wrap gap-2">
                {['acero', 'negras'].map((subOpt) => {
                  const isSelected = suspensionSub === subOpt;
                  return (
                    <button
                      key={subOpt}
                      onClick={() => setSuspensionSub(subOpt)}
                      className={`
                        relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border-2
                        ${
                          isSelected
                            ? 'border-accent bg-accent/15 text-accent shadow-sm shadow-accent/5'
                            : 'border-foreground/10 text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                        }
                      `}
                    >
                      <span>{SUB_SUSPENSION_LABELS[subOpt]}</span>
                      <PriceDelta
                        delta={isSelected ? 0 : suspensionSubDeltas[subOpt]}
                      />
                    </button>
                  );
                })}
              </div>
              {showValidationErrors && !suspensionSub && (
                <p className="text-xs text-red-400 font-semibold animate-pulse mt-1 flex items-center gap-1.5 pl-1">
                  <span>⚠️</span> Por favor, selecciona el tipo de cadenas
                </p>
              )}
            </div>
          )}

          {showValidationErrors && !suspension && (
            <p className="text-xs text-red-400 font-semibold animate-pulse mt-2 flex items-center gap-1.5 pl-1">
              <span>⚠️</span> Por favor, selecciona una sujeción
            </p>
          )}
        </div>

        <div className="space-y-4">
          <OptionGroup
            label={varnish ? `Barniz (recomendable para mejor resultado) (+${varnishPriceSum}€)` : "Barniz (recomendable para mejor resultado)"}
            options={['no', 'si']}
            value={varnish}
            onChange={setVarnish}
            labels={BARNIZ_LABELS}
            deltas={varnishDeltas}
          />
        </div>

        {showValidationErrors && !isConfigComplete && (
          <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-2xl text-xs text-red-400 font-semibold flex items-center gap-2 animate-fade-in mt-4">
            <span>⚠️</span>
            <span>Faltan campos obligatorios por seleccionar: {
              [
                !wood && 'Tablón',
                !lighting && 'Iluminación',
                !suspension && 'Sujeción',
                (lighting === 'leds' && lightingSub === 'regulable' && !lightingDimmer) && 'Controlador Regulable'
              ].filter(Boolean).join(', ')
            }.</span>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground/60 px-1">
          <span>* Campos obligatorios</span>
        </div>

        <div className="w-full h-px bg-foreground/10" />

        {/* Total */}
        <div className="flex items-end justify-between">
          <div className="transition-all duration-300">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-1">
              Total
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={totalPrice}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="text-5xl font-display font-bold text-accent"
              >
                {totalPrice}€
                <span className="text-xs font-normal text-muted-foreground ml-2">
                  (IVA incl.)
                </span>
              </motion.span>
            </AnimatePresence>
          </div>
          <button
            onClick={handleRequestSubmit}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-bold rounded-2xl hover:bg-accent-hover transition-colors duration-300 text-sm uppercase tracking-widest shadow-lg shadow-accent/20"
          >
            Solicitar
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-foreground/10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              {formStatus === 'success' ? (
                <div className="text-center space-y-4 py-6 animate-fade-in">
                  <CheckCircle className="mx-auto text-green-400 w-12 h-12" />
                  <h3 className="text-xl font-display font-bold">¡Gracias!</h3>
                  <p className="text-muted-foreground text-sm">{formMessage}</p>
                  <button
                    onClick={closeModal}
                    className="mt-2 px-6 py-2.5 bg-accent text-background font-bold rounded-xl hover:bg-accent-hover transition-colors text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl md:text-2xl font-display font-bold">
                      Solicitar <span className="text-accent">Lámpara</span>
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Completa tus datos para que podamos ponernos en contacto
                      contigo y cerrar tu pedido personalizado.
                    </p>
                  </div>

                  {/* Config Summary */}
                  <div className={`grid gap-2 mb-4 ${varnish === 'si' ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-1 sm:grid-cols-3'}`}>
                    <div className="bg-accent/5 border border-accent/15 rounded-lg px-2 py-2 text-center">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Tablón
                      </span>
                      <span className="text-xs font-bold text-accent">
                        {WOOD_LABELS[wood]}{' '}
                        <span className="text-[10px] text-muted-foreground block font-normal">
                          ({SUB_WOOD_LABELS[woodSub]})
                        </span>
                      </span>
                    </div>
                    <div className="bg-accent/5 border border-accent/15 rounded-lg px-2 py-2 text-center">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Iluminación
                      </span>
                      <span className="text-xs font-bold text-accent">
                        {lighting ? LIGHTING_LABELS[lighting] : 'No'}{' '}
                        {lighting && (
                          <span className="text-[10px] text-muted-foreground block font-normal">
                            ({SUB_LIGHTING_LABELS[lightingSub]}
                            {lighting === 'leds' ? ` - ${LED_DESIGN_LABELS[lightingDesign]}` : ''}
                            {lighting === 'leds' && lightingLedUpper === 'si' ? ' + Led Superior' : ''}
                            {lighting === 'leds' && lightingSub === 'regulable' && lightingDimmer ? ` (${DIMMER_LABELS[lightingDimmer]})` : ''})
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="bg-accent/5 border border-accent/15 rounded-lg px-2 py-2 text-center">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Sujeción
                      </span>
                      <span className="text-xs font-bold text-accent">
                        {SUSPENSION_LABELS[suspension]}
                        {suspension === 'cadenas' && (
                          <span className="text-[10px] text-muted-foreground block font-normal">
                            ({SUB_SUSPENSION_LABELS[suspensionSub]})
                          </span>
                        )}
                      </span>
                    </div>
                    {varnish === 'si' && (
                      <div className="bg-accent/5 border border-accent/15 rounded-lg px-2 py-2 text-center animate-fade-in">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block">
                          Barniz
                        </span>
                        <span className="text-xs font-bold text-accent">
                          {BARNIZ_LABELS[varnish]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between bg-accent/10 border border-accent/20 rounded-lg px-4 py-2 mb-4">
                    <span className="text-xs font-bold text-foreground">
                      Total configurado{' '}
                      <span className="text-[10px] font-normal text-muted-foreground">
                        (IVA incl.)
                      </span>
                    </span>
                    <span className="text-xl font-display font-bold text-accent">
                      {totalPrice}€
                    </span>
                  </div>

                  <form onSubmit={handleModalSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label
                          htmlFor="lamp-name"
                          className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          Nombre
                        </label>
                        <input
                          id="lamp-name"
                          name="name"
                          type="text"
                          required
                          disabled={formStatus === 'loading'}
                          placeholder="Tu nombre completo"
                          className="w-full bg-background border border-foreground/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="lamp-email"
                          className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          Email
                        </label>
                        <input
                          id="lamp-email"
                          name="email"
                          type="email"
                          required
                          disabled={formStatus === 'loading'}
                          placeholder="nombre@ejemplo.com"
                          className="w-full bg-background border border-foreground/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="lamp-phone"
                        className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Teléfono
                      </label>
                      <input
                        id="lamp-phone"
                        name="phone"
                        type="tel"
                        required
                        disabled={formStatus === 'loading'}
                        placeholder="612 345 678"
                        className="w-full bg-background border border-foreground/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      />
                    </div>

                    {/* Hidden pre-filled subject */}
                    <input
                      type="hidden"
                      name="subject"
                      value="Configuración de lámpara personalizada"
                    />

                    <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-lg px-3 py-1.5">
                      <span className="text-accent text-xs">✓</span>
                      <span className="text-xs font-semibold text-accent">
                        La configuración de tu lámpara ya está incluida en el
                        mensaje.
                      </span>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="lamp-message"
                        className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="lamp-message"
                        name="message"
                        required
                        disabled={formStatus === 'loading'}
                        rows={3}
                        placeholder="Cuéntanos más sobre lo que necesitas..."
                        className="w-full bg-background border border-foreground/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      />
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-red-400 text-xs font-medium animate-shake">
                        {formMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className={cn(
                        'w-full py-3 bg-accent text-background rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]',
                        formStatus === 'loading' &&
                          'opacity-70 cursor-not-allowed',
                      )}
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin w-4 h-4" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Enviar solicitud</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
