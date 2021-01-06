import React from 'react';

let active;

export const columnsUser = [
    // { field: 'id',                headerName: 'ID',               width: 70 },
    { field: 'nombre',            headerName: 'Nombre',           width: 300 },
    { field: 'edad',              headerName: 'Edad',             width: 90 },
    { field: 'days',              headerName: 'Dias por semana',  width: 200 },
    { field: 'grupo',             headerName: 'Grupo',            width: 150 },
    { field: 'telefono_celular',  headerName: 'Telefono Celular', width: 200 },
    {
      field: "",
      headerName: "Editar",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: ( params ) => {
      return  <button
                    type        ="button"
                    className   ="btn btn-editar"
                    
                    onClick     = { (  )=> handleClick(`${ params.getValue('id') }`) }
                >
                    Editar
                </button>;
    }
  },
  {
    field: "activo",
    headerName: "Activo",
    sortable: false,
    width: 150,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
      active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Activo </button> : <button type ="button" className   ="btn btn-eliminar"> Desactivo </button> ;
      return  active
    }
  },
];


export const columnsTeacher = [
  // { field: 'id',                headerName: 'ID',               width: 70 },
  { field: 'nombre',            headerName: 'Nombre',           width: 300 },
  { field: 'edad',              headerName: 'Edad',             width: 90 },
  { field: 'telefono_celular',  headerName: 'Télefono celular', width: 150 },
  {
    field: "",
    headerName: "Editar",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
    return  <button
                  type        ="button"
                  className   ="btn btn-editar"
                  
                  onClick     = { (  )=> handleClick(`${ params.getValue('id') }`) }
              >
                  Editar
              </button>;
    },
  },
  {
    field: "activo",
    headerName: "Activo",
    sortable: false,
    width: 150,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
      active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Activo </button> : <button type ="button" className   ="btn btn-eliminar"> Desactivo </button> ;
      return  active
    }
  },
];

export const columnsPayment = [
  // { field: 'id',          headerName: 'ID',             width: 70 },
  { field: 'fecha_pago',  headerName: 'Fecha de pago',  width: 220 },
  { field: 'user_id',     headerName: 'Usuario',        width: 350 },
  { field: 'concepto',    headerName: 'Concepto',       width: 200 },
  { field: 'etiqueta',    headerName: 'Eiqueta',        width: 300 },
  { field: 'costo',       headerName: 'Costo',          width: 150 },
  { field: 'firma_caja',  headerName: 'Firma de Caja',  width: 300 },
  {
    field: "",
    headerName: "Editar",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
    return  <button
                  type        ="button"
                  className   ="btn btn-editar"
                  
                  onClick     = { (  )=> handleClick(`${ params.getValue('id') }`) }
              >
                  Editar
              </button>;
    }
  },
];

export const columnsClasses = [
  // { field: 'id',          headerName: 'ID',             width: 70 },
  { field: 'horario_clase',       headerName: 'Horario de la clase',    width: 220 },
  { field: 'updated_at',          headerName: 'Ultima actualización',   width: 250 },
  { field: 'capacidad_clase',     headerName: 'Capacidad de la clase',  width: 250 },
  { field: 'etiqueta',            headerName: 'Etiqueta',                width: 250 },
  { field: 'profesor',            headerName: 'Profesor',               width: 200 },
  {
    field: "",
    headerName: "Editar",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
    return  <button
                  type        ="button"
                  className   ="btn btn-editar"
                  
                  onClick     = { (  )=> handleClick(`${ params.getValue('id') }`) }
              >
                  Editar
              </button>;
    }
  },
  {
    field: "activo",
    headerName: "Activo",
    sortable: false,
    width: 150,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
      active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Hay cupo </button> : <button type ="button" className   ="btn btn-eliminar"> Cupo lleno </button> ;
      return  active
    }
  },
];


export const columnsClassUser = [
  // { field: 'id',                headerName: 'ID',               width: 70 },
  { field: 'created_at',            headerName: 'Fecha de creación',  width: 300 },
  { field: 'clase_id',                 headerName: 'Clase',              width: 200 },
  { field: 'user_id',               headerName: 'Usuario',            width: 200 },
  { field: 'profesor_id',              headerName: 'Profesor',           width: 200 },
];

export const columnRoles = [
  // { field: 'id',                headerName: 'ID',               width: 70 },
  { field: 'nombre_rol',            headerName: 'Nombre',              width: 200 },
  { field: 'descripcion_rol',       headerName: 'Descripción',            width: 700 },
];


const handleClick = (id) =>{
    console.log(id);
}