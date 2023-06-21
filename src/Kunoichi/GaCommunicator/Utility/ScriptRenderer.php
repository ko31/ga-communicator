<?php

namespace Kunoichi\GaCommunicator\Utility;


use Kunoichi\GaCommunicator\Pattern\Singleton;
use Kunoichi\GaCommunicator\Screen\Settings;

/**
 * Script Renderer
 *
 * @package ga-communicator
 * @property-read Settings $setting Setting class instance.
 */
class ScriptRenderer extends Singleton {

	/**
	 * Constructor.
	 */
	protected function init() {
		// Priority
		$priority = (int) apply_filters( 'ga_communicator_head_priority', 2 );
		add_action( 'wp_head', [ $this, 'render' ], $priority );
		add_action( 'admin_head', [ $this, 'admin_render' ], $priority );
		add_action( 'login_head', [ $this, 'login_render' ], $priority );
		// Body open.
		add_action( 'wp_body_open', [ $this, 'body_open' ], 1 );
		add_action( 'in_admin_header', [ $this, 'admin_body_open' ], 1 );
		add_action( 'login_header', [ $this, 'login_body_open' ], 1 );
	}

	/**
	 * Get tag to render.
	 *
	 * @param string $type Tag type. gtag, universal, manual, or ""(empty).
	 * @return string
	 */
	public function get_tag( $type = 'gtag' ) {
		$additional = $this->setting->get_option( 'extra' );
		$id         = $this->setting->get_option( 'property' );
		$ga4_id     = $this->setting->get_option( 'ga4-tracking-id' );
		if ( $ga4_id ) {
			if ( 'gtag' === $type && $this->setting->get_option( 'ga4-both-tracking' ) ) {
				$additional .= sprintf( "\ngtag( 'config', '%s', gtagConfig )", $ga4_id );
			} else {
				$id = $ga4_id;
			}
		}
		$tag      = $this->setting->placeholder->tag( $type, $id, $additional );
		$replaced = $this->setting->placeholder->replace( $tag );
		return apply_filters( 'ga_communicator_tag', $replaced, $type, $id );
	}

	/**
	 * Render analytics scripts.
	 */
	public function render() {
		$type = $this->setting->get_option( 'tag' );
		if ( ! $type ) {
			// No output.
			return;
		}
		echo $this->get_tag( $type );
	}

	/**
	 * Render script in admin screen.
	 */
	public function admin_render() {
		if ( in_array( 'admin', $this->get_places(), true ) ) {
			$this->render();
		}
	}

	/**
	 * Render script in login screen.
	 */
	public function login_render() {
		if ( in_array( 'login', $this->get_places(), true ) ) {
			$this->render();
		}
	}

	/**
	 * Get places to display.
	 *
	 * @return string[]
	 */
	public function get_places() {
		return array_filter( array_map( 'trim', explode( ',', $this->setting->get_option( 'place' ) ) ) );
	}

	/**
	 * Render after body open.
	 *
	 * @return void
	 */
	public function body_open() {
		$open = $this->setting->get_option( 'body-open' );
		if ( ! $open ) {
			return;
		}
		echo $open;
	}

	/**
	 * If script should be rendered in body open, render it.
	 *
	 * @return void
	 */
	public function admin_body_open() {
		if ( in_array( 'admin', $this->get_places(), true ) ) {
			$this->body_open();
		}
	}

	/**
	 * Render script in login screen.
	 */
	public function login_body_open() {
		if ( in_array( 'login', $this->get_places(), true ) ) {
			$this->body_open();
		}
	}

	/**
	 * Getter.
	 *
	 * @param string $name
	 * @return mixed
	 */
	public function __get( $name ) {
		switch ( $name ) {
			case 'setting':
				return Settings::get_instance();
			default:
				return null;
		}
	}
}
